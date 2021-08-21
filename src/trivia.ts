var Analytics = require('filum-node-sdk');

const client = new Analytics('<YOUR WRITE KEY PASTE HERE>')

for (let i = 0; i < 10; i++) {
    const your_user_id = String('Testing User ' + i)
    client.identify({
        user_id: your_user_id,
        event_params: {
            'name': String("Mock User " + i),
            'phone': '0987654321',
            'address': 'Saigon, Vietnam'
        }

    })
    for (let i = 0; i < 10; i++) {
        client.track({
            user_id: your_user_id,
            event_name: 'Item Purchased',
            event_params: {
                name: "Testing item",
                stock: i,
                price: i + 1.5
            }
        });
    }
}
    

client.flush()

console.log ("Done sending events to Event API!");