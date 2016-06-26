
/**
 *
 * @apiGroup Campspot
 *
 * @api {post} /api/camp/search	Search Campgrounds
 * @apiName search
 * @apiDescription Search for open campgrounds given a campsite and reservation file. You can post to the API
 * by performing a simple curl request. See below:
 *
 *
 * @apiExample {curl} Example usage:
 *     curl -v -H "Content-Type: application/json" -XPOST --data "@testcase.json" http://localhost:3030/api/camp/search
 *
 *
 * @apiParam {json}       content      File Content to test the end point. Copy and Paste these below in the Rest Area.
 * @apiParamExample {json} Request From E-Mail:
 * {"search":{"startDate":"2016-06-07","endDate":"2016-06-10"},"gapRules":[{"gapSize":2},{"gapSize":3}],"campsites":[{"id":1,"name":"Grizzly Adams Adventure Cabin"},{"id":2,"name":"Lewis and Clark Camp Spot"},{"id":3,"name":"Jonny Appleseed Log Cabin"},{"id":4,"name":"Davey Crockett Camphouse"},{"id":5,"name":"Daniel Boone Bungalow"},{"id":6,"name":"Teddy Rosevelt Tent Site"},{"id":7,"name":"Edmund Hillary Igloo"},{"id":8,"name":"Bear Grylls Cozy Cave"},{"id":9,"name":"Wyatt Earp Corral"}],"reservations":[{"campsiteId":1,"startDate":"2016-06-01","endDate":"2016-06-04"},{"campsiteId":1,"startDate":"2016-06-11","endDate":"2016-06-13"},{"campsiteId":2,"startDate":"2016-06-08","endDate":"2016-06-09"},{"campsiteId":3,"startDate":"2016-06-04","endDate":"2016-06-06"},{"campsiteId":3,"startDate":"2016-06-14","endDate":"2016-06-16"},{"campsiteId":4,"startDate":"2016-06-03","endDate":"2016-06-05"},{"campsiteId":4,"startDate":"2016-06-13","endDate":"2016-06-14"},{"campsiteId":5,"startDate":"2016-06-03","endDate":"2016-06-06"},{"campsiteId":5,"startDate":"2016-06-12","endDate":"2016-06-14"},{"campsiteId":6,"startDate":"2016-06-04","endDate":"2016-06-06"},{"campsiteId":6,"startDate":"2016-06-11","endDate":"2016-06-12"},{"campsiteId":6,"startDate":"2016-06-16","endDate":"2016-06-16"},{"campsiteId":7,"startDate":"2016-06-03","endDate":"2016-06-04"},{"campsiteId":7,"startDate":"2016-06-07","endDate":"2016-06-09"},{"campsiteId":7,"startDate":"2016-06-13","endDate":"2016-06-16"},{"campsiteId":8,"startDate":"2016-06-01","endDate":"2016-06-02"},{"campsiteId":8,"startDate":"2016-06-05","endDate":"2016-06-06"},{"campsiteId":9,"startDate":"2016-06-03","endDate":"2016-06-05"},{"campsiteId":9,"startDate":"2016-06-12","endDate":"2016-06-16"}]}
 * @apiParamExample {json} Request With No Opening:
 * {"search":{"startDate":"2016-06-07","endDate":"2016-06-10"},"gapRules":[{"gapSize":2},{"gapSize":3}],"campsites":[{"id":1,"name":"Grizzly Adams Adventure Cabin"},{"id":2,"name":"Lewis and Clark Camp Spot"},{"id":3,"name":"Jonny Appleseed Log Cabin"},{"id":4,"name":"Davey Crockett Camphouse"},{"id":5,"name":"Daniel Boone Bungalow"},{"id":6,"name":"Teddy Rosevelt Tent Site"},{"id":7,"name":"Edmund Hillary Igloo"},{"id":8,"name":"Bear Grylls Cozy Cave"},{"id":9,"name":"Wyatt Earp Corral"}],"reservations":[{"campsiteId":1,"startDate":"2016-06-01","endDate":"2016-06-08"},{"campsiteId":1,"startDate":"2016-06-11","endDate":"2016-06-13"},{"campsiteId":2,"startDate":"2016-06-08","endDate":"2016-06-09"},{"campsiteId":3,"startDate":"2016-06-04","endDate":"2016-06-06"},{"campsiteId":3,"startDate":"2016-06-09","endDate":"2016-06-16"},{"campsiteId":4,"startDate":"2016-06-03","endDate":"2016-06-08"},{"campsiteId":4,"startDate":"2016-06-13","endDate":"2016-06-14"},{"campsiteId":5,"startDate":"2016-06-03","endDate":"2016-06-08"},{"campsiteId":5,"startDate":"2016-06-12","endDate":"2016-06-14"},{"campsiteId":6,"startDate":"2016-06-04","endDate":"2016-06-06"},{"campsiteId":6,"startDate":"2016-06-09","endDate":"2016-06-12"},{"campsiteId":6,"startDate":"2016-06-16","endDate":"2016-06-16"},{"campsiteId":7,"startDate":"2016-06-03","endDate":"2016-06-04"},{"campsiteId":7,"startDate":"2016-06-07","endDate":"2016-06-09"},{"campsiteId":7,"startDate":"2016-06-13","endDate":"2016-06-16"},{"campsiteId":8,"startDate":"2016-06-01","endDate":"2016-06-02"},{"campsiteId":8,"startDate":"2016-06-05","endDate":"2016-06-09"},{"campsiteId":9,"startDate":"2016-06-03","endDate":"2016-06-06"},{"campsiteId":9,"startDate":"2016-06-09","endDate":"2016-06-16"}]}
 * @apiParamExample {json} Partially Available Request:
 * {"search":{"startDate":"2016-06-07","endDate":"2016-06-10"},"gapRules":[{"gapSize":2},{"gapSize":3}],"campsites":[{"id":1,"name":"Grizzly Adams Adventure Cabin"},{"id":2,"name":"Lewis and Clark Camp Spot"},{"id":3,"name":"Jonny Appleseed Log Cabin"},{"id":4,"name":"Davey Crockett Camphouse"},{"id":5,"name":"Daniel Boone Bungalow"},{"id":6,"name":"Teddy Rosevelt Tent Site"},{"id":7,"name":"Edmund Hillary Igloo"},{"id":8,"name":"Bear Grylls Cozy Cave"},{"id":9,"name":"Wyatt Earp Corral"}],"reservations":[{"campsiteId":1,"startDate":"2016-06-01","endDate":"2016-06-04"},{"campsiteId":1,"startDate":"2016-06-11","endDate":"2016-06-13"},{"campsiteId":2,"startDate":"2016-06-08","endDate":"2016-06-09"},{"campsiteId":3,"startDate":"2016-06-04","endDate":"2016-06-06"},{"campsiteId":3,"startDate":"2016-06-14","endDate":"2016-06-16"},{"campsiteId":4,"startDate":"2016-06-03","endDate":"2016-06-05"},{"campsiteId":4,"startDate":"2016-06-13","endDate":"2016-06-14"},{"campsiteId":5,"startDate":"2016-06-03","endDate":"2016-06-08"},{"campsiteId":5,"startDate":"2016-06-12","endDate":"2016-06-14"},{"campsiteId":6,"startDate":"2016-06-04","endDate":"2016-06-06"},{"campsiteId":6,"startDate":"2016-06-09","endDate":"2016-06-12"},{"campsiteId":6,"startDate":"2016-06-16","endDate":"2016-06-16"},{"campsiteId":7,"startDate":"2016-06-03","endDate":"2016-06-04"},{"campsiteId":7,"startDate":"2016-06-07","endDate":"2016-06-09"},{"campsiteId":7,"startDate":"2016-06-13","endDate":"2016-06-16"},{"campsiteId":8,"startDate":"2016-06-01","endDate":"2016-06-02"},{"campsiteId":8,"startDate":"2016-06-05","endDate":"2016-06-09"},{"campsiteId":9,"startDate":"2016-06-03","endDate":"2016-06-06"},{"campsiteId":9,"startDate":"2016-06-11","endDate":"2016-06-16"}]}
 *
 * @apiSuccess {Array} Array of objects that contain the gapSize and the result
 * @apiSuccessExample Success-Response:
 * [
 *   {
 *     "gapSize": 2,
 *     "result": [
 *  	 {
 *  	   "id": 5,
 *  	   "name": "Daniel Boone Bungalow"
 *  	 },
 *  	 {
 *  	   "id": 6,
 *  	   "name": "Teddy Rosevelt Tent Site"
 *  	 },
 *  	 {
 *  	   "id": 8,
 *  	   "name": "Bear Grylls Cozy Cave"
 *  	 },
 *  	 {
 *  	   "id": 9,
 *  	   "name": "Wyatt Earp Corral"
 *  	 }
 *     ]
 *   },
 *   {
 *     "gapSize": 3,
 *     "result": [
 *  	 {
 *  	   "id": 1,
 *  	   "name": "Grizzly Adams Adventure Cabin"
 *  	 },
 *  	 {
 *  	   "id": 4,
 *  	   "name": "Davey Crockett Camphouse"
 *  	 },
 *  	 {
 *  	   "id": 5,
 *  	   "name": "Daniel Boone Bungalow"
 *  	 },
 *  	 {
 *  	   "id": 6,
 *  	   "name": "Teddy Rosevelt Tent Site"
 *  	 },
 *  	 {
 *  	   "id": 8,
 *  	   "name": "Bear Grylls Cozy Cave"
 *  	 },
 *  	 {
 *  	   "id": 9,
 *  	   "name": "Wyatt Earp Corral"
 *  	 }
 *     ]
 *   }
 * ]
 *
 * @apiSampleRequest http://localhost:3030/api/camp/search-demo
 *
 */