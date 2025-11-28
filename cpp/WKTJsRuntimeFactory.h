#pragma once

#include <jsi/jsi.h>
#include <memory>

#if JS_RUNTIME_HERMES
// Hermes
#include <hermes/hermes.h>
#elif __has_include(<React-jsc/JSCRuntime.h>)
  // JSC
  #include <React-jsc/JSCRuntime.h>
#else
  #include <jsc/JSCRuntime.h>
#endif

namespace RNWorklet {

namespace jsi = facebook::jsi;

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-function"

static std::unique_ptr<jsi::Runtime> makeJSIRuntime() {

#pragma clang diagnostic pop

#if JS_RUNTIME_HERMES
  return facebook::hermes::makeHermesRuntime();
#else
  return facebook::jsc::makeJSCRuntime();
#endif
}

} // namespace RNWorklet
