let data = ""

self.onconnect = (e) => {
    const port = e.prots[0];
    port.onmessage = (e) => {
        if (e.data === 'PHP是世界上最好的语言') {
            port.postMessage(data)
            data = ""
        } else {
            data = e.data;
        }
    }
}