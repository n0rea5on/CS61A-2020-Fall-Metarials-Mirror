/*
	Each object in the array represents a single high level category for the flowchart.
	The "resources" attribute contains the resources that will be displayed when the category is selected.
*/
resourceData = [
	{
		"name": "fundamentals",
		"type": "category",
		"description": "I feel shaky about a topic and want to brush up on the fundamentals.",
		"resources": [
			{
				"name": "CS61A Textbook",
				"type": "resource",
				"href": "http://composingprograms.com/"
			},
			{
				"name": "Sequoia's Book",
				"type": "resource",
				"href": "https://sequoia-tree.github.io/"
			},
			{
				"name": "Guides and Practice Problems by Topic",
				"type": "resource",
				"href": "/resources.html#resource-start"
			}
		]
	},
	{
		"name": "challenge",
		"type": "category",
		"description": "I feel comfortable with Discussion and Lab questions for a topic, and want more challenging practice.",
		"resources": [
			{
				"name": "Exam Questions on ____ in each Topic section",
				"type": "resource",
				"href": "/resources.html#resource-start"
			}
		]
	},
	{
		"name": "exams",
		"type": "category",
		"description": "I am interested in studying for exams in general.",
		"resources": [
			{
				"name": "Studying Guide",
				"type": "resource",
				"href": "/articles/studying.html"
			},
			{
				"name": "Past Exams",
				"type": "resource",
				"href": "/resources.html#past-exams"
			},
			{
				"name": "Midterm 1 Guides and Practice Problems",
				"type": "resource",
				"href": "/resources.html#midterm-1"
			},
			{
				"name": "Midterm 2 Guides and Practice Problems",
				"type": "resource",
				"href": "/resources.html#midterm-2"
			},
			{
				"name": "Final Guides and Practice Problems",
				"type": "resource",
				"href": "/resources.html#final-exam"
			},
		    {
				"name": "Sequoia's Book",
				"type": "resource",
				"href": "https://sequoia-tree.github.io/"
			},
		]
	},
	{
		"name": "stuck",
		"type": "category",
		"description": "I am studying, but feel like I am not improving.",
		"resources": [
			{
				"name": "See \"Advice\" section",
				"type": "resource",
				"href": "/resources.html#advice"
			}
		]
	}
]
