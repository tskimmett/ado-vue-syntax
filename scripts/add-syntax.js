const extensions = ['.vue', '.astro'];
const addSyntaxes = () => {
	if (!window.monaco) {
		return setTimeout(addSyntaxes, 250);
	}

	const htmlDef = monaco.languages.getLanguages().find(l => l.id === 'html');
	htmlDef.extensions.push(...extensions);
	monaco.languages.register(htmlDef);
	console.log('Added syntax highlighting for the following file types:', extensions);
};

addSyntaxes();