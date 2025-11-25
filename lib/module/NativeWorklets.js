import { TurboModuleRegistry } from "react-native";
const WorkletsInstaller = TurboModuleRegistry.getEnforcing("Worklets");
if (globalThis.Worklets === undefined || globalThis.Worklets == null) {
  if (WorkletsInstaller == null || typeof WorkletsInstaller.install !== "function") {
    console.error("Native Worklets Module cannot be found! Make sure you correctly " + "installed native dependencies and rebuilt your app.");
  } else {
    // Install the module
    const result = WorkletsInstaller.install();
    if (result !== true) {
      console.error(`Native Worklets Module failed to correctly install JSI Bindings! Result: ${result}`);
    }
  }
} else {
  console.log("react-native-worklets-core installed.");
}
export const Worklets = globalThis.Worklets;
//# sourceMappingURL=NativeWorklets.js.map