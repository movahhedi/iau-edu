export default {
	install(app) {
		app.mixin({
			mounted() {
				this.addDirAutoToLists();
			},
			updated() {
				this.addDirAutoToLists();
			},
			methods: {
				addDirAutoToLists() {
					const lists = document.querySelectorAll("ul, ol");
					lists.forEach((list) => {
						list.setAttribute("dir", "auto");
					});
				},
			},
		});
	},
};
