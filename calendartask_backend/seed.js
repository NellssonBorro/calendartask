import 'dotenv/config';
import { db } from './libs/dbConnect.js';

const users = [
    {
        username: 'user one',
        email: 'userone@test.com',
        password: '$2a$04$O73D2hQObIy6pxp3FSe03.EdteGtv9ootnH12wHepQ9GhB6Vjx6Z6',
        avatar: 'https/g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'user two',
        email: 'usertwo@test.com',
        password: '$2a$04$O73D2hQObIy6pxp3FSe03.EdteGtv9ootnH12wHepQ9GhB6Vjx6Z6',
        avatar: 'https/g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'user three',
        email: 'userthree@test.com',
        password: '$2a$04$O73D2hQObIy6pxp3FSe03.EdteGtv9ootnH12wHepQ9GhB6Vjx6Z6',
        avatar: 'https/g.codewithnathan.com/default-user.png',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
]

const tasks = [
    {
        subject: 'Tiktok clone Ideation',
        description: 'Brainstorm on the tiktok clone project',
        duration: '5 days',
        start_date: new Date(2024, 11, 17),
        start_time: new Date(2024, 11, 17, 8,0,0),
        due_date: new Date(2024, 11, 24),
        due_time: new Date(2024, 11, 24, 17,0,0),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'pending',
        owner: 'userone@test.com',
        invitees: ['usertwo@test.com', 'userthree@test.com']
    },
    {
        subject: 'LMS pitch',
        description: 'Brainstorm on the tiktok clone project',
        duration: '5 days',
        start_date: new Date(2024, 11, 17),
        start_time: new Date(2024, 11, 17, 8,0,0),
        due_date: new Date(2024, 11, 24),
        due_time: new Date(2024, 11, 24, 17,0,0),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'pending',
        owner: 'userthree@test.com',
        invitees: ['usertwo@test.com'],
    },
    {
        subject: 'Debug chat app',
        description: 'Brainstorm on the tiktok clone project',
        duration: '5 days',
        start_date: new Date(2024, 11, 17),
        start_time: new Date(2024, 11, 17, 8,0,0),
        due_date: new Date(2024, 11, 24),
        due_time: new Date(2024, 11, 24, 17,0,0),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'pending',
        owner: 'usertwo@test.com',
        invitees: [],
    }
]


try{
    //seeding users
    let collection = await db.collection('users');
    console.log('[seed]', 'seeding users ....');
    const result = await collection.insertMany(users);
    console.log(result.insertedIds);
    console.log('[seed]', 'Seeding users done');

    //seeding tasks
    tasks[0].owner = result.insertedIds[0];
    tasks[0].invitees = [result.insertedIds[1], result.insertedIds[2]];
    
    tasks[1].owner = result.insertedIds[2];
    tasks[1].invitees = [result.insertedIds[1]];

    tasks[2].owner = result.insertedIds[1];
    tasks[2].invitees = [];

    //seeding db
    collection = await db.collection('tasks');
    console.log('[seed]', 'seeding tasks ....');
    await collection.insertMany(tasks);
    console.log(result.insertedIds);
    console.log('[seed]', 'Seeding tasks done');
    
    console.log('[seed]', 'all done');
}catch(error){
    console.log('[seed]', ' Error:', error);
}

process.exit();