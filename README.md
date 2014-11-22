InstaSynchP-Bump-Command
========================

Name
-----
`'bump` - Move a video from a user or url right under the active video or a specific position.

Synopsis
--------
`'bump [POSITION] [USER] or [URL]`

Description
-----------
* `username`: The user to bump
* `position`: The position the video should be moved to (0, 1..)
* `url`: Video url of the video that should be moved (if the video is not on the playlist it will be added and moved then)

Examples
-----------
`'bump user` Move the last video of user right under the active video<br>
`'bump user 0` Move the last video of user to the position 0<br>
`'bump url` Move the specified video right under the active video (and add the video if it isn't on the playlist)<br>
`'bump url 1` Move the specified video to the position 1<br>
`'bump url user` Bump either the specified video or the last video of user (whichever is lowest on the playlist)

License
-----------
The MIT License (MIT)<br>

&lt;InstaSynch - Watch Videos with friends.&gt;<br>
Copyright (c) 2014 InstaSynch

&lt;Bibbytube - Modified InstaSynch client code&gt;<br>
Copyright (C) 2014  Zod-

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
