self.addEventListener("message", (e) => {
    e.waitUntil(
        self.clients.matchAll().then((clients) => {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.forEach((client) => {
                client.postMessage(e.data)
            })
        })
    )
})