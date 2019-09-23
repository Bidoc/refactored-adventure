//funcoes js

app.get ('/api/testes', (req, res) => {
	res.send(courses);

});
app.put ('/api/courses/put/:2', (req, res) => {
	res.update(req.params.id.id);
});
