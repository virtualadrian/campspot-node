import campService from '../services/camp-service';

/**
 * Search camp grounds for available based on
 * gap rule provided
 * @returns {User}
 */
function search(req, res) {
	// call service to get available campgrounds
	const available = campService.searchGrounds(
		req.body.reservations,
		req.body.search,
		req.body.campsites,
		req.body.gapRules
	);

	// return as JSON to caller
	return res.json(available);
}

/**
 * Search camp grounds for available based on
 * gap rule provided
 * @returns {User}
 */
function interval(req, res) {
	// call service to get available campgrounds
	const available = campService.searchCampSites(
		req.body.reservations,
		req.body.search,
		req.body.campsites,
		req.body.gapRules
	);

	// return as JSON to caller
	return res.json(available);
}

export default { search, interval };