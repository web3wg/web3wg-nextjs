import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
	font-family: 'Gotham', sans-serif;

	--text-dark: #FCF5ED;
	--accent1-dark: #FCEE21;
	--accent2-dark: #E10D8C;
	--accent3-dark: #00FFCE;
	--bkgimg-dark: url("/images/grid_bottom.png") no-repeat center bottom;
	--bkg1-dark: #000529;
	--bkg2-dark: #000210;
	--bkg3-dark: rgba(0, 5, 41, 0.5);
	--shadow-dark: #6C7090;

	--text-light: #000529;
	--accent1-light: #E10D8C;
	--accent2-light: #FCEE21;
	--accent3-light: #00FFCE;
	--bkgimg-light: url("/images/grid_bottom.png") no-repeat center bottom;
	--bkg1-light: #F1F1F1;
	--bkg2-light: #FCF5ED;
	--bkg3-light: rgba(241, 241, 241, 0.5);
	--shadow-light: #656279;
}

:root{
	--text: var(--text-dark);
	--text-opposite: var(--text-light);
	--bkg1: var(--bkg1-dark);
	--bkg2: var(--bkg2-dark);
	--bkg3: var(--bkg3-dark);
	--bkg-opposite: var(--bkg1-light);
	--accent1: var(--accent1-dark);
	--accent2: var(--accent2-dark);
	--accent3: var(--accent3-dark);
	--shadow: var(--shadow-dark);
 }

 .bg-light{
	background-color: var(--bkg1-dark) !important;
 }

 .logo-light{
	display: none;
 }

 .navbar-toggler{
	background-color: var(--bkg3-dark) !important;
 }

 a:hover{
	color: var(--accent1);
 }

 input[type=submit] {
	color: var(--text-light);
	background-color: var(--accent1);
	padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 5px;
 }

 input[type=text] {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
	width: 100%;
	height: 20vh;
	white-space: nowrap;
	overflow: auto;
	border-radius: 5px;
}

input::placeholder {
	color: var(--text-light) !important;
	opacity: .5 !important;
}

textarea::placeholder {
	color: var(--text-light) !important;
	opacity: .5 !important;
}

input[type=text]::placeholder {
	color: var(--text-light) !important;
	opacity: .5 !important;
}

@media(prefers-color-scheme:dark){

	:root{
	--text: var(--text-dark);
	--text-opposite: var(--text-light);
	--bkg1: var(--bkg1-dark);
	--bkg2: var(--bkg2-dark);
	--bkg3: var(--bkg3-dark);
	--bkg-opposite: var(--bkg1-light);
	--accent1: var(--accent1-dark);
	--shadow: var(--shadow-dark);
 }

 .bg-light{
	background-color: var(--bkg1-dark) !important;
 }

 .logo-light{
	display: none;
 }

 .navbar-toggler{
	background-color: var(--bkg3-dark) !important;
 }
 }

html {
	min-height: 100%;
	position: relative;
}

body {
	height: 100%;
	background-color: var(--bkg1);
}

body::after{
	content: "";
	background: url("/images/grid_top.png") no-repeat center top, url("/images/grid_bottom.png") no-repeat center bottom;
	background-size: 100% 25%, 100%;
	opacity: .25;
	top:0;
	left:0;
	bottom: 0;
	right: 0;
	position: absolute;
	z-index: -1;
}


h1 {
	font-size: 30pt;
	font-weight: 800;
	color: var(--text);
}

h2 {
	font-size: 25pt;
	font-weight: 200;
	color: var(--text);
}

h3 {
	font-size: 20pt;
	font-weight: 100;
	color: var(--text);
}

h4 {
	font-size: 15pt;
	font-weight: 100;
	color: var(--text);
}

h5 {
	font-size: 25pt;
	font-weight: 100;
	color: var(--text);

}

ul {
	color: var(--text)
}

ul.a {
  list-style-type: circle;
  font-size: 1.0em;
  padding-left: 70px;
  padding-right: 50px;
}

ul.b {
  list-style-type: disc;
  font-size: 1.0em;
}

p {
	font-size: 14pt;
	font-weight: 100;
	color: var(--text);
}

.highlight {
	color: var(--accent1);
}

a {
	text-decoration: none;
	color: var(--text);
	background-color: transparent;
}

label {
	color: var(--text);
}

hr {
  position: relative;
  /* top: 20px; */
  border: none;
  height: 4px;
  background: grey;
  /* margin-bottom: 50px; */
}

/*
.jumbotron {
	background-color: var(--background-light-1);
}
*/


.nav {
	font-family: Gotham;
  z-index: 2;
  overflow-x: hidden;
  color: pink;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
}

.nav a {
  text-decoration: none;
  display: block;
	font-family: Gotham;
  /* color: var(--text); */
}

.button {
	background-color: var(--accent1);
	border: none;
	color: var(--text-light);
	/* color: var(--text); */
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 5px;
}

.btn {
	/* color: pink; */
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: inline-block;
  color: var(--text);

  /* font-size: 1.2em; */
  margin-top: 10px;
  cursor: pointer;
}
.btn_inactive {
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: inline-block;
  color: var(--accent1);
	/* color: var(--accent3-dark); */
  /* font-size: 1.2em; */
  margin-top: 10px;
  cursor: pointer;
  color:var(--shadow);
}

button {
	background-color: var(--bkg1);
}
.jobs {
	color: var(--text-opposite);

}
.jobs-list {
	/* background: var(--bkg-opposite); */
}

.jobs-list-item1{
	background-color: var(--bkg3);
}

.jobs-list-item2{
	background-color: var(--bkg3);
}

.svg {
  filter: invert(87%) sepia(0%) saturate(33%) hue-rotate(144deg) brightness(84%) contrast(89%);
  width: 30px;
  height: 30px;
}
.svg:hover {
  filter: invert(87%) sepia(100%) saturate(7494%) hue-rotate(333deg) brightness(105%) contrast(104%);
  transform: translateY(-5px);
  -webkit-transform: translateY(-5px);
  -moz-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  -o-transform: translateY(-5px);
}

@media (max-width: 767.98px){
	h1 {
		font-size: 20pt;
	}
	h2 {
		font-size: 18pt;
	}
	h3 {
		font-size: 16pt;
	}
	p {
		font-size: 8pt;
		font-weight: medium;
	}
}

@media (max-width: 575.98px){
	h1 {
		font-size: 14pt;
		font-weight: 400;
	}
	h2 {
		font-size: 14pt;
		font-weight: 300;
	}
	h3 {
		font-size: 14pt;
		font-weight: 200;
	}
	p {
		font-size: 12pt;
		font-weight: 100;
		line-height: 10pt;
	}
}
`;
