const keystone = require('keystone');
const ContentSection = keystone.list('ContentSection');

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	view.on('init', function(next) {
		var q = ContentSection.model
			.findOne({ key: 'services' });

		q.exec(function(err, result) {
			locals.section = result;
			next(err);
		});
	});

	// view.query('servicesDescription',
	// 	ContentSection.model
	// 		.findOne({ key: 'services-content' })
	// );

	view.render('services');

};
