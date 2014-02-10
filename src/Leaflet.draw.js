/*
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */

L.drawVersion = '0.2.4-dev';

L.drawLocal = {
	draw: {
		toolbar: {
			actions: {
				title: 'Cancelar',
				text: 'No poner punto'
			},
			undo: {
				title: 'Delete last point drawn',
				text: 'Delete last point'
			},
			buttons: {
				polyline: 'Draw a polyline',
				polygon: 'Draw a polygon',
				rectangle: 'Draw a rectangle',
				circle: 'Draw a circle',
				marker: 'Señala un punto'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Click and drag to draw circle.'
				}
			},
			marker: {
				tooltip: {
					start: 'Clic en el mapa para señalar un punto.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Click to start drawing shape.',
					cont: 'Click to continue drawing shape.',
					end: 'Click first point to close this shape.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> shape edges cannot cross!',
				tooltip: {
					start: 'Click to start drawing line.',
					cont: 'Click to continue drawing line.',
					end: 'Click last point to finish line.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Click and drag to draw rectangle.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Release mouse to finish drawing.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Guardar cambios.',
					text: 'Guardar'
				},
				cancel: {
					title: 'Cancelar edición, descartar cambios.',
					text: 'Cancelar'
				}
			},
			buttons: {
				edit: 'Editar un punto.',
				editDisabled: 'No hay puntos para editar.',
				remove: 'Borrar punto.',
				removeDisabled: 'No hay puntos para borrar.'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Arrastra el punto para editarlo.',
					subtext: 'Clic en cancelar para descartar cambios.'
				}
			},
			remove: {
				tooltip: {
					text: 'Clic en un punto para eliminarlo '
				}
			}
		}
	}
};
