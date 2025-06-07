# TET Andalusia – Summer Restrictions

This project provides an interactive web map visualizing the legal and illegal sections of the Trans Euro Trail (TET) in Andalusia during the summer fire restriction period, according to the wildfire regulations issued by the Junta de Andalucía.

## 🔍 What It Does

- **Highlights TET sections** that are **illegal to ride in summer** due to their location within forest areas or their 400 m buffer zones.
- Uses **official road network data** to verify whether tracks are on legal roads (as required by law).
- Shows the **TET track** in blue and **illegal sections** in red.
- Includes additional map layers: towns, water, forest, and forest buffers.

> ⚠️ Due to GPS inaccuracies and data resolution, a 50 m tolerance was used to determine proximity to official roads.

> 🗂️ The forest and road layers were simplified for better map performance – all legality calculations were done using the full-resolution geometries.

## 🗺️ Live Preview

> 🔗 [View the interactive map](https://pstahel.github.io/TET_Andalucia-Summer_Restrictions/)

## 📦 Data Sources

- **Forest & buffer**: CORINE Land Cover 2018 + 400 m buffer
- **Roads**: BTN100 (Transporte 2021)
- **TET track**: [transeurotrail.org](https://transeurotrail.org/spain)
- **Boundaries & towns**: GADM + Geofabrik OSM data

## 📜 Legal Reference

**Junta de Andalucía** – Summer fire prevention regulation:  
[Prohibición total del uso del fuego y circulación de vehículos a motor](https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/medio-forestal/incendios-forestales/plan-infoca-marco-de-referencia-frente-a-incendios-forestales/prohibicion-total-del-uso-del-fuego-y-la-circulacion-de-vehiculos-a-motor)

> ❗ Circulation with motor vehicles is prohibited in forest areas and within 400 meters around them unless on public roads.

## 🛠️ Tools Used

- **QGIS** for spatial analysis & modeling
- **qgis2web** plugin for map export (Leaflet)
- **GitHub Pages** for web hosting


## 📜 License

The analysis, layers, styles, and web map (excluding the TET track) are published under:

**Creative Commons Attribution 4.0 International (CC BY 4.0)**  
[Read license text](https://creativecommons.org/licenses/by/4.0/)


## 🛑 Legal Notice about the TET GPX

This project includes a visualization of the Trans Euro Trail® GPX track.  
The GPX data is **not included for download** and remains the property of the  
**Trans Euro Trail® Community Interest Company**, Company No. 11371199, United Kingdom.

By visiting the official website [transeurotrail.org](https://www.transeurotrail.org),  
you can access the latest version and agree to their [Terms of Use](https://www.transeurotrail.org/legal).

> **Note:** Redistribution or hosting of original or modified GPX files is strictly prohibited.


## ⚠️ Disclaimer

This map is a personal project and **not legally binding**. Always verify local laws before riding.



