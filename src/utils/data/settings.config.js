import default_wallpaper from "../../assets/images/wallpapers/default_wallpaper.jpg";
import wallpaper1 from "../../assets/images/wallpapers/wallpaper1.jpg";
import wallpaper2 from "../../assets/images/wallpapers/wallpaper2.jpg";
import wallpaper3 from "../../assets/images/wallpapers/wallpaper3.jpg";
import wallpaper4 from "../../assets/images/wallpapers/wallpaper4.jpg";
import wallpaper5 from "../../assets/images/wallpapers/wallpaper5.jpg";

const settings = {
	desktop_wallpapers: [
		{
			id: "default_wall",
			value: default_wallpaper,
		},
		{
			id: "wall_1",
			value: wallpaper1,
		},
		{
			id: "wall_2",
			value: wallpaper2,
		},
		{
			id: "wall_3",
			value: wallpaper3,
		},
		{
			id:"wall_4",
			value:wallpaper4,
		},
		{
			id:"wall_5",
			value:wallpaper5,
		}
	],
	default_wallpaper: default_wallpaper,
};

export default settings;
