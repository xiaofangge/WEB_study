function workerSandbox(appCode) {
    const blob = new Blob([appCode]);
    const appWorker = new Worker(window.URL.createObjectURL(blob))
}
workerSandbox("const a = 1; console.log(a)") // 输出1
