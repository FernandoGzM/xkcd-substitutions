function chooseLanguage(){
	var langs = ["--Choose--" , "English", "Spanish"];
	var s = document.createElement('select');


	for (var i = 0; i < langs.length; i++) {
		var opt;
		opt = document.createElement('option');
		opt.value = langs[i];
		opt.innerHTML = langs[i] ;
		s.appendChild(opt);
	}
	s.id="xkcdSubs";
	s.setAttribute("onChange", "xkcdSubstitutions()");
	s.style.position ="fixed";
	s.style.top = "10px";
	s.style.cssFloat="left";
	s.style.zIndex="99999";
	document.body.appendChild(s);

}

function xkcdSubstitutions(){
	var lang = document.getElementById("xkcdSubs").value.toLowerCase();
	var words = {
		english:[
			{find: /witnesses/gi, replace: 'these dudes I know'},
			{find: /allegedly/gi, replace: 'kinda probably'},
			{find: /new study/gi, replace: 'tumbler post'},
			{find: /rebuild/gi, replace: 'avenge'},
			{find: /space/gi, replace: 'spaaace'},
			{find: /google glass/gi, replace: 'virtual boy'},
			{find: /smartphone/gi, replace: 'Pokédex'},
			{find: /electric/gi, replace: 'atomic'},
			{find: /senator/gi, replace: 'elf-lord'},
			{find: /car/gi, replace: 'cat'},
			{find: /election/gi, replace: 'eating contest'},
			{find: /congressional leaders/gi, replace: 'river spirits'},
			{find: /homeland security/gi, replace: 'homestar runner'},
			{find: /could not be reached for comment/gi, replace: 'is guilty and everyone knows it'},
		],

		spanish: [
			{find: /testigos/gi, replace: 'tíos esos'},
			{find: /intencionadamente/gi, replace: '"sin querer"'},
			{find: /nuevo estudio/gi, replace: 'post de tumblr'},
			{find: /recuperar/gi, replace: 'vengar'},
			{find: /espacio/gi, replace: 'espaaaaacio'},
			{find: /google glass/gi, replace: 'virtual boy'},
			{find: /smartphone/gi, replace: 'movilaco'},
			{find: /eléctrica/gi, replace: 'nucelar'},
			{find: /político/gi, replace: 'elf-lord'},
			{find: /coche/gi, replace: 'gatico'},
			{find: /elecciones/gi, replace: 'concurso de comida'},
			{find: /presidente/gi, replace: 'espíritus ancestrales'},
			{find: /seguridad/gi, replace: 'con securitas'},
			{find: /no está disponible/gi, replace: 'es culpable y todos lo sabemos'}
		]
	};

	var html = document.body.innerHTML;
	for (var i = 0; i < words[lang].length; i++) {
			html = html.replace(words[lang][i].find, words[lang][i].replace);
	};
	document.body.innerHTML= html;
	return html;
}

var option = chooseLanguage();
