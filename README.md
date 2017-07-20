## Bloc-Chat

![blocchat](/app/assets/images/blocchat-main.png)

**Blocchat** is a chatroom app which allows users to send messages to each other via chatrooms.Users will also have the ability to create their own chatrooms.--
Blocchat has been built with the following technologies -

- AngularJS(1.5.7)
- AngularFire(2.0.1)

## _User stories_

The following user stories are part of the blocchat app:

1. Users need to sign in to _Blocchat_ to view the available rooms
2. Users need to have the ability to create chat rooms.
3. Users need to see the current messages in all rooms.
4. Users need to send messages associated with their user name in all rooms.

## _Solution_

#### List all rooms
--------------------

The first step would be to create a room factory,inject the `$firebaseArray()` service and then use the firebase's `child()` method to query the rooms.

  ```
  (function() {
    function Room($firebaseArray) {
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);

      window.foo = $firebaseArray(firebase.database().ref().child("messages"));

      return {
        all: rooms
      };
    }

    angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
  })();

  ```

#### Create chat rooms
----------------------

To create new chat rooms,I've used the AngularFire's `$add` method inside a RoomFactory method `add` which takes `room` as an argument.

  ```
  (function() {
    function Room($firebaseArray) {
    ......
    ......

      rooms.addRoom = function(name){
      this.$add({name: name});
      };

      }

    angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
  })();

  ```

#### List Messages
--------------------

To list all the messages when the user clicks a chat room,the pattern is same as that of a room - create a `message` factory,inject the `$firebaseArray` service ,and use the `child()` method to query for messages.

  ```
  (function() {
    function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    //var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        console.log(roomId);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },

    };


    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
    })();

  ```

#### Send messages
------------------

In this case,we add a method to your Message factory called send, that takes a message object as an argument and submits it to your Firebase server:

  ```
  (function() {
    function Message($firebaseArray) {
    ....
    ....
    send: function(newMessage) {
          // Send method logic
          console.log(newMessage);
          $firebaseArray(ref).$add(newMessage);
        }
    ....
    ....

     angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
    })();

  ```

#### User Authentication
-------------------------

To store the user in the browser,I used _cookies_ and to integrate cookies with Angular -

- Inject the `ngCookies` module in to the Angular app's dependency array
- Inject the $cookies service into the run block's dependencies to check for the presence of the cookie holding the username

  ```
  (function() {
    function BlocChatCookies($cookies) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        // Do something to allow users to set their username
      }
    }

    angular
      .module('blocChat')
      .run(['$cookies', BlocChatCookies]);
    })();

    ```

Next, I've used the basic javascript `prompt()` in the authentication controller to prompt the user for _email_ and _password_ when user clicks 'Login'

## _Results_

#### User Signin
--------------------
Before testing the authentication,users have to be manually created in the firebase database.

![sign in](/app/assets/images/email.png "Sign In")

#### List Chatrooms
--------------------
Shows a list of chatrooms available for the user.

![list chatrooms](/app/assets/images/listchatrooms.png "list chatrooms")

#### Send Messages
--------------------
Select a chatroom and send a message to the chatroom

![send messages](/app/assets/images/sendmessages.png "send messages")

#### Show Messages
--------------------
Login with a different user and show messages

![show messages](/app/assets/images/showmessages.png "show messages")
## Configuration

## Run _BlocChat_ app:_

Start by cloning the repository:

```
$ git clone git@github.com:praveenyr/bloc-chat-angular.git

```

The project uses Grunt to run tasks in development. Thoroughly review our [resource on using Grunt](https://www.bloc.io/resources/using-grunt) before using this application. It may also help to review [our resource on NPM and `package.json` files](https://www.bloc.io/resources/npm-and-package-json).

Install the project dependencies by running:

```
$ npm install

```

## Run the Application

Run the application:

```
$ npm start

```

The start command runs a simple server on port 3000. To view it in a any browser, go to [http://localhost:3000](http://localhost:3000).

## Directory Structure

```
├── Gruntfile.js
├── LICENSE
├── Procfile
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   │       └── bloc-chat-main.png
│   │       └── email.png
│   │       └── listchatrooms.png
│   │       └── sendmessages.png
│   │       └── showmessages.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   │   └── controllers
│   │       └── MyAuthCtrl.js
│   │       └── RoomCtrl.js
│   │   └── services
│   │       └── Message.js
│   │       └── Room.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```

All code, styles, markup, and assets should be saved to the `app` directory. Saving changes creates a new directory, `dist`, that holds final copies of the application content. `dist` is the directory the server uses to serve the content displayed by the browser. __Do not edit files in `dist`__ because it will reset changes to your work every time you save. Restrict all edits to files in the `app` directory.

## Grunt plugins

A list of the Grunt plugins in this application.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from our development folders and puts them in the folder that will be served with the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your distribution folder (`dist`) so that logic in your stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options.
