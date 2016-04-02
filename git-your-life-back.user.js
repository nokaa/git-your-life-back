// Copyright (C)  2016 nokaa <nokaa@cock.li>
// This software is licensed under the terms of the
// GNU General Public License version 3. You should have
// received a copy of this license with this software.
// The license may also be found at https://gnu.org/licenses/gpl.txt

// ==UserScript==
// @name        git-your-life-back
// @version     1.0.0
// @namespace   git-your-life-back
// @description Removes the Github contribution graph
// @license     GPLv3, https://gnu.org/licenses/gpl.txt
// @include     https://github.com/*
// @include     http://github.com/*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/nokaa/git-your-life-back/master/git-your-life-back.user.js
// @downloadURL https://raw.githubusercontent.com/nokaa/git-your-life-back/master/git-your-life-back.user.js
// ==/UserScript==

document.getElementById("contributions-calendar").parentElement.remove();
