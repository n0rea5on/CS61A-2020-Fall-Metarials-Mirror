/*
  This file creates a flowchart from the data in ./flowchart-data.js imported as resourceData.
  Each category in resourceData contains a "description" correlating to a challenge a student may potentially face
    and an array of resources that could be helpful
  Each resource has a "name" and "href" that links to the location of the resource.

  The flowchart object is the core view that remains on the page at all times
    Nodes can be added with flowchart.add(<nodes>)
    Nodes can be removed with flowchart.remove(<predicate>)
    Styling of the flowchart and nodes must be done in this file rather than a .css file
      Most styles are added in the flowchart constructor - any valid css can be used
      Node dimensions and positions are controlled by the global vars at the top of the file

  cytoscape API documentation: http://js.cytoscape.org/#core
*/

var rows = 2;
var boxWidth = 250;
var boxHeight = 75;
var xOffset = 25;
var yOffset = 50;

var flowchart = window.flowchart = cytoscape({
    container: document.getElementById('flowchart'),

    boxSelectionEnabled: false,
    autoungrabify: true,
    autounselectify: true,
    zoomingEnabled: false,
    panningEnabled: true,

    style: [
      {
        selector: 'node',
        style: {
          'shape': 'square',
          'content': 'data(description)',
          'text-valign': 'center',
          'text-halign': 'center',
          'font-size': '15px',
          'font-family': 'Work Sans, sans-serif',
          'color': '#ecf0f1',
          'background-color': '#0072c1',
          'width': 'data(width)',
          'height': 'data(height)',
          'text-wrap': 'wrap',
          'text-max-width': '230px',
          'padding': '0px',
          'overlay-padding': 0,
          'overlay-opacity': 0,
        }
      },
      {
        selector: 'core',
        style: {
          'active-bg-opacity': 0,
        }
      }
    ]
  });

displayResourceCategories();

//Create and add nodes for each category in resourceData
function displayResourceCategories() {
  flowchart.remove("node[id > '']") //remove all current nodes.
  cols = Math.ceil(resourceData.length / rows);
  nodes = []
  for (var i = 0; i < resourceData.length; i++) {
    var category = resourceData[i]
    var n = {
      group: "nodes",
      data: {
        id: category.name,
        type: category.type,
        index: i,
        description: category.description,
        width: boxWidth,
        height: boxHeight
      },
      position: { x: ((boxWidth/2) + xOffset) + (280*(i % cols)),
                  y: yOffset + (100* Math.floor(i/cols))
                }
    }
    nodes.push(n)
  }
  flowchart.add(nodes)
  flowchart.reset();
}

//Create and add nodes for the selected category
function displayResource(category) {
  flowchart.remove("node[id > '']") //remove all current nodes.
  resources = resourceData[category].resources
  cols = Math.ceil(resources.length / rows);
  nodes = []
  for (var i = 0; i < resources.length; i++) {
    var resource = resources[i]
    var n = {
      group: "nodes",
      data: {
        description: resource.name,
        type: resource.type,
        href: resource.href,
        width: boxWidth,
        height: boxHeight
      },
      position: { x: ((boxWidth/2) + xOffset) + (280*(i % cols)),
                  y: yOffset + (100* Math.floor(i/cols))
                }
    }
    nodes.push(n)
  }
  backNode = {
      group: "nodes",
      data: {
        id: 'back', //make index?
        description: '< Back',
        type: 'back',
        width: '70px',
        height: '30px'
      },
      position: { x: (70/2) + xOffset, // 1/2 of width + offset since boxes position is based on center of rectangle.
                  y: yOffset + (90 * rows)
                }

  }
  nodes.push(backNode)
  flowchart.add(nodes)
}

//Event handler for clicking nodes
//Resource: redirect to resource location
//Category: display resources for the category
//Back: return to primary view containing all categories
flowchart.on('tap', 'node', function(){
  if (this.data('type') === "resource") {
    href = this.data('href')
    try { // your browser may block popups
      window.open( href, href.charAt(0) === '/' ? '_self' : '');
    } catch(e){ // fall back on url change
      href.charAt(0) === '/' ? window.location.replace(href) : window.location.href = this.data('href');
    }
  } else if (this.data('type') === "category"){
    displayResource(this.data('index'));
  } else if (this.data('type') === 'back') {
    displayResourceCategories();
  }
});

flowchart.on('mouseover', 'node', function (evt) {
                          $('html,body').css('cursor', 'pointer');
                          evt.target.style('color', '#ffffff');
                          evt.target.style('background-color', '#B0C4DE');
                    } );

flowchart.on('mouseout', 'node', function (evt) {
                          $('html,body').css('cursor', 'default');
                          evt.target.style('color', '#ecf0f1');
                          evt.target.style('background-color', '#0072c1');
                    });