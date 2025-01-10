// Interfaces for Type Safety
interface InitiateSessionResponse {
    outputs: Array<{
      outputs: Array<{
        artifacts: {
          stream_url?: string;
        };
        outputs: {
          message: {
            text: string;
          };
        };
      }>;
    }>;
  }
  
  interface RunFlowOptions {
    flowIdOrName: string;
    langflowId: string;
    inputValue: string;
    inputType?: string;
    outputType?: string;
    tweaks?: Record<string, any>;
    stream?: boolean;
    onUpdate?: (data: any) => void;
    onClose?: (message: string) => void;
    onError?: (error: any) => void;
  }
  
  interface OutputWindowProps {
    inputValue: string; // Input value to send to the API
    inputType?: string; // Optional input type (default: 'chat')
    outputType?: string; // Optional output type (default: 'chat')
    stream?: boolean; // Optional streaming flag (default: false)
  }
  
  // LangflowClient Class
  export class LangflowClient {
    private baseURL: string;
    private applicationToken: string;
  
    constructor(baseURL: string, applicationToken: string) {
      this.baseURL = baseURL;
      this.applicationToken = applicationToken;
    }
  
    async post(endpoint: string, body: any, headers: Record<string, string> = {}) {
      headers['Authorization'] = `Bearer ${this.applicationToken}`;
      headers['Content-Type'] = 'application/json';
  
      const url = `${this.baseURL}${endpoint}`;
  
      console.log('Making request to:', url);
      console.log('Request headers:', headers);
      console.log('Request body:', body);
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
        });
  
        console.log('Response status:', response.status);
  
        if (!response.ok) {
          const responseMessage = await response.json();
          throw new Error(`API Error: ${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
        }
  
        const responseData = await response.json();
        console.log('Response data:', responseData);
        return responseData;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Request Error:', error.message);
        } else {
          console.error('Request Error:', error);
        }
        throw error;
      }
    }
  
    async initiateSession(flowId: string, langflowId: string, inputValue: string, inputType: string = 'chat', outputType: string = 'chat', stream: boolean = false, tweaks: Record<string, any> = {}) {
      const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
      return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
    }
  
    handleStream(streamUrl: string, onUpdate: (data: any) => void, onClose: (message: string) => void, onError: (error: any) => void) {
      const eventSource = new EventSource(streamUrl);
  
      eventSource.onmessage = event => {
        const data = JSON.parse(event.data);
        onUpdate(data);
      };
  
      eventSource.onerror = event => {
        console.error('Stream Error:', event);
        onError(event);
        eventSource.close();
        // Reconnect after 5 seconds
        setTimeout(() => this.handleStream(streamUrl, onUpdate, onClose, onError), 5000);
      };
  
      eventSource.addEventListener("close", () => {
        onClose('Stream closed');
        eventSource.close();
      });
  
      return eventSource;
    }
  
    async runFlow(flowIdOrName: string, langflowId: string, inputValue: string, inputType: string = 'chat', outputType: string = 'chat', tweaks: Record<string, any> = {}, stream: boolean = false, onUpdate: (data: any) => void, onClose: (message: string) => void, onError: (error: any) => void) {
      try {
        const initResponse: InitiateSessionResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
        console.log('Init Response:', initResponse);
  
        if (stream && initResponse?.outputs?.[0]?.outputs?.[0]?.artifacts?.stream_url) {
          const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
          console.log(`Streaming from: ${streamUrl}`);
          this.handleStream(streamUrl, onUpdate, onClose, onError);
        }
  
        return initResponse;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error running flow:', error.message);
        } else {
          console.error('Error running flow:', error);
        }
        onError('Error initiating session');
      }
    }
  }
  
  // Helper Functions
  async function getLangflowClient() {
    const applicationToken = import.meta.env.VITE_LANGFLOW_TOKEN;
    return new LangflowClient('http://localhost:5173/api', applicationToken);
  }
  
  async function getTweaks() {
    return {
      "ChatInput-qOIky": {},
      "ParseData-VunOU": {},
      "Prompt-jsGjf": {},
      "ChatOutput-R5NV0": {},
      "AstraDB-GHIV4": {},
      "AstraDB-MVsTY": {},
      "File-YleG4": {},
      "HuggingFaceInferenceAPIEmbeddings-tiCFN": {},
      "SplitText-tcx5I": {},
      "HuggingFaceInferenceAPIEmbeddings-LZF2o": {},
      "GoogleGenerativeAIModel-YkHR0": {},
    };
  }
  
  // Main runLangflow Function
  export async function runLangflow(inputValue: string, inputType: string = 'chat', outputType: string = 'chat', stream: boolean = false) {
    const flowIdOrName = import.meta.env.VITE_FLOW_ID;
    const langflowId = import.meta.env.VITE_LANGFLOW_ID;
  
    const langflowClient = await getLangflowClient();
  
    try {
      const tweaks = await getTweaks();
  
      const response = await langflowClient.runFlow(
        flowIdOrName,
        langflowId,
        inputValue,
        inputType,
        outputType,
        tweaks,
        stream,
        (data) => console.log("Received:", data.chunk), // onUpdate
        (message) => console.log("Stream Closed:", message), // onClose
        (error) => console.log("Stream Error:", error) // onError
      );
  
      if (!stream && response?.outputs?.[0]?.outputs?.[0]?.outputs?.message) {
        const output = response.outputs[0].outputs[0].outputs.message;
        console.log("Final Output:", output.text);
        return output.text;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Main Error:', error.message);
      } else {
        console.error('Main Error:', error);
      }
      throw error;
    }
  }
