// ==UserScript==
// @name        InstaSynchP Bump Command
// @namespace   InstaSynchP
// @description Command to bump a video from a user or url

// @version     1
// @author      Zod-
// @source      https://github.com/Zod-/InstaSynchP-Bump-Command
// @license     MIT

// @include     http://*.instasynch.com/*
// @include     http://instasynch.com/*
// @include     http://*.instasync.com/*
// @include     http://instasync.com/*
// @grant       none
// @run-at      document-start

// @require     https://greasyfork.org/scripts/5647-instasynchp-library/code/InstaSynchP%20Library.js
// ==/UserScript==

function Bump(version) {
    "use strict";
    this.version = version;
    this.name = "InstaSynchP Bump Command";
    this.commands = {
        "'bump": {
            'hasArguments': true,
            'type': 'mod',
            'reference': this,
            'description': 'Bumps a video from a user or the url. Position can be specified',
            'callback': this.execute
        }
    };
    this.bumpInfo = undefined;
    this.bumpTo = undefined;
}

Bump.prototype.executeOnce = function () {
    var th = this;
    //bind event for bumping an url
    events.on(th, 'AddVideo', function (vidinfo) {
        console.log(vidinfo);
        console.log(videoInfoEquals(vidinfo.info, th.bumpInfo));
        //bump the video after it got added
        if (videoInfoEquals(vidinfo.info, th.bumpInfo)) {
            window.global.sendcmd('move', {
                info: vidinfo.info,
                position: th.bumpTo
            });
            th.bumpInfo = undefined;
            th.bumpTo = undefined;
        }
    });

};

Bump.prototype.execute = function (opts) {
    "use strict";
    var th = this,
        user = opts.usernames[0],
        i,
        activeIndex = activeVideoIndex(),
        bumpIndex = -1;
    th.bumpTo = opts.numbers.length > 0 ? opts.numbers[0] : activeVideoIndex() + 1;
    th.bumpInfo = opts.videos[0];

    //return if nothing to bump got found
    if (!user && !th.bumpInfo) {
        addSystemMessage('Nothing found to bump: \'bump [user] [url] [position]');
        return;
    }

    //search the video to be bumped
    for (i = window.playlist.length - 1; i >= 0; i -= 1) {
        if (videoInfoEquals(window.playlist[i].info, th.bumpInfo) ||
            (user && window.playlist[i].addedby.toLowerCase() === user.toLowerCase())) {
            bumpIndex = i;
            break;
        }
    }
    //video not found
    if (bumpIndex === -1) {
        //no link provided
        if (!th.bumpInfo) {
            addSystemMessage("The user didn't add any videos");
        } else {
            //add the video and bump it in the addVideo event
            window.global.sendcmd('add', {
                URL: urlParser.create(th.bumpInfo)
            });
        }
    } else {
        window.global.sendcmd('move', {
            info: window.playlist[bumpIndex].info,
            position: th.bumpTo
        });
        th.bumpTo = undefined;
        th.bumpInfo = undefined;
    }
};

window.plugins = window.plugins || {};
window.plugins.bump = new Bump('1');
