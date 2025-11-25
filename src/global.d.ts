export {};

declare global {
  // attach Worklets to globalThis
  var Worklets: import("./types").IWorkletNativeApi;
}
