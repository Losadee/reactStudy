// ES2015 모듈 문법
import React, { Component } from "react";

class NumberBaseball extends Component {}

export const hello = "hello"; // import {hello}
export const bye = "bye"; // import { hello, bye }

export default NumberBaseball; // import NumberBaseball from 경로

// Node의 모듈 문법 (CommonJS)
// const React = require('react');
// exports.hello = 'hello';
// module.exports = NumberBaseball;

// Node로 돌리는 Webpack에 import를 사용하면 에러 발생
// => babel이 import를 require로 변환 해주기 때문에 사용 가능
