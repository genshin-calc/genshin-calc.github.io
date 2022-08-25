self.addEventListener('fetch', function (event) {
    event.respondWith(
      new Response('サービスワーカーが動いています！')
    );
});

self.addEventListener('push', function (event) {
    console.log('Received a push message', event);
    var title = "樹脂が満タンになります";
    var body = "まもなく樹脂が満タンになります。\n冒険があなたを待っています!";

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: 'https://genshin-calc.github.io/images/resin.webp',
            tag: 'push-notification-tag'
        })
    );
});
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    clients.openWindow("/");
}, false);