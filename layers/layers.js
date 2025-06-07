ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25830").setExtent([64942.980337, 3951260.708966, 704176.313670, 4308554.042299]);
var wms_layers = [];

var format_Andaluciabackground_0 = new ol.format.GeoJSON();
var features_Andaluciabackground_0 = format_Andaluciabackground_0.readFeatures(json_Andaluciabackground_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Andaluciabackground_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Andaluciabackground_0.addFeatures(features_Andaluciabackground_0);
var lyr_Andaluciabackground_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Andaluciabackground_0, 
                style: style_Andaluciabackground_0,
                popuplayertitle: 'Andalucia (background)',
                interactive: false,
                title: '<img src="styles/legend/Andaluciabackground_0.png" /> Andalucia (background)'
            });
var format_Terrenoforestal400msimplified_1 = new ol.format.GeoJSON();
var features_Terrenoforestal400msimplified_1 = format_Terrenoforestal400msimplified_1.readFeatures(json_Terrenoforestal400msimplified_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Terrenoforestal400msimplified_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terrenoforestal400msimplified_1.addFeatures(features_Terrenoforestal400msimplified_1);
var lyr_Terrenoforestal400msimplified_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terrenoforestal400msimplified_1, 
                style: style_Terrenoforestal400msimplified_1,
                popuplayertitle: 'Terreno forestal +400m (simplified)',
                interactive: false,
                title: '<img src="styles/legend/Terrenoforestal400msimplified_1.png" /> Terreno forestal +400m (simplified)'
            });
var format_Terrenoforestalsimplified_2 = new ol.format.GeoJSON();
var features_Terrenoforestalsimplified_2 = format_Terrenoforestalsimplified_2.readFeatures(json_Terrenoforestalsimplified_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Terrenoforestalsimplified_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terrenoforestalsimplified_2.addFeatures(features_Terrenoforestalsimplified_2);
var lyr_Terrenoforestalsimplified_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terrenoforestalsimplified_2, 
                style: style_Terrenoforestalsimplified_2,
                popuplayertitle: 'Terreno forestal (simplified)',
                interactive: false,
                title: '<img src="styles/legend/Terrenoforestalsimplified_2.png" /> Terreno forestal (simplified)'
            });
var format_Agua_3 = new ol.format.GeoJSON();
var features_Agua_3 = format_Agua_3.readFeatures(json_Agua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Agua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agua_3.addFeatures(features_Agua_3);
var lyr_Agua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agua_3, 
                style: style_Agua_3,
                popuplayertitle: 'Agua',
                interactive: false,
                title: '<img src="styles/legend/Agua_3.png" /> Agua'
            });
var format_Ciudades_4 = new ol.format.GeoJSON();
var features_Ciudades_4 = format_Ciudades_4.readFeatures(json_Ciudades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Ciudades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ciudades_4.addFeatures(features_Ciudades_4);
var lyr_Ciudades_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ciudades_4, 
                style: style_Ciudades_4,
                popuplayertitle: 'Ciudades',
                interactive: false,
                title: '<img src="styles/legend/Ciudades_4.png" /> Ciudades'
            });
var format_Villages_5 = new ol.format.GeoJSON();
var features_Villages_5 = format_Villages_5.readFeatures(json_Villages_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Villages_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_5.addFeatures(features_Villages_5);
var lyr_Villages_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_5,
maxResolution:28.004746196923488,
 
                style: style_Villages_5,
                popuplayertitle: 'Villages',
                interactive: true,
                title: '<img src="styles/legend/Villages_5.png" /> Villages'
            });
var format_Towns_6 = new ol.format.GeoJSON();
var features_Towns_6 = format_Towns_6.readFeatures(json_Towns_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Towns_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_6.addFeatures(features_Towns_6);
var lyr_Towns_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towns_6,
maxResolution:140.02261080597134,
 
                style: style_Towns_6,
                popuplayertitle: 'Towns',
                interactive: true,
                title: '<img src="styles/legend/Towns_6.png" /> Towns'
            });
var format_Cities_7 = new ol.format.GeoJSON();
var features_Cities_7 = format_Cities_7.readFeatures(json_Cities_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Cities_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_7.addFeatures(features_Cities_7);
var lyr_Cities_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_7, 
                style: style_Cities_7,
                popuplayertitle: 'Cities',
                interactive: true,
                title: '<img src="styles/legend/Cities_7.png" /> Cities'
            });
var format_Carreterassimplified_8 = new ol.format.GeoJSON();
var features_Carreterassimplified_8 = format_Carreterassimplified_8.readFeatures(json_Carreterassimplified_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Carreterassimplified_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreterassimplified_8.addFeatures(features_Carreterassimplified_8);
var lyr_Carreterassimplified_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreterassimplified_8, 
                style: style_Carreterassimplified_8,
                popuplayertitle: 'Carreteras (simplified)',
                interactive: false,
                title: '<img src="styles/legend/Carreterassimplified_8.png" /> Carreteras (simplified)'
            });
var format_TETAndalucia202506_9 = new ol.format.GeoJSON();
var features_TETAndalucia202506_9 = format_TETAndalucia202506_9.readFeatures(json_TETAndalucia202506_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TETAndalucia202506_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TETAndalucia202506_9.addFeatures(features_TETAndalucia202506_9);
var lyr_TETAndalucia202506_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TETAndalucia202506_9, 
                style: style_TETAndalucia202506_9,
                popuplayertitle: 'TET Andalucia 2025-06',
                interactive: false,
                title: '<img src="styles/legend/TETAndalucia202506_9.png" /> TET Andalucia 2025-06'
            });
var format_IllegalinSummerTETAndalucia202506_10 = new ol.format.GeoJSON();
var features_IllegalinSummerTETAndalucia202506_10 = format_IllegalinSummerTETAndalucia202506_10.readFeatures(json_IllegalinSummerTETAndalucia202506_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_IllegalinSummerTETAndalucia202506_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IllegalinSummerTETAndalucia202506_10.addFeatures(features_IllegalinSummerTETAndalucia202506_10);
var lyr_IllegalinSummerTETAndalucia202506_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IllegalinSummerTETAndalucia202506_10, 
                style: style_IllegalinSummerTETAndalucia202506_10,
                popuplayertitle: 'Illegal in Summer - TET Andalucia 2025-06',
                interactive: false,
                title: '<img src="styles/legend/IllegalinSummerTETAndalucia202506_10.png" /> Illegal in Summer - TET Andalucia 2025-06'
            });
var group_NombresdelasCiudades = new ol.layer.Group({
                                layers: [lyr_Villages_5,lyr_Towns_6,lyr_Cities_7,],
                                fold: 'close',
                                title: 'Nombres de las Ciudades'});

lyr_Andaluciabackground_0.setVisible(true);lyr_Terrenoforestal400msimplified_1.setVisible(true);lyr_Terrenoforestalsimplified_2.setVisible(true);lyr_Agua_3.setVisible(true);lyr_Ciudades_4.setVisible(true);lyr_Villages_5.setVisible(true);lyr_Towns_6.setVisible(true);lyr_Cities_7.setVisible(true);lyr_Carreterassimplified_8.setVisible(true);lyr_TETAndalucia202506_9.setVisible(true);lyr_IllegalinSummerTETAndalucia202506_10.setVisible(true);
var layersList = [lyr_Andaluciabackground_0,lyr_Terrenoforestal400msimplified_1,lyr_Terrenoforestalsimplified_2,lyr_Agua_3,lyr_Ciudades_4,group_NombresdelasCiudades,lyr_Carreterassimplified_8,lyr_TETAndalucia202506_9,lyr_IllegalinSummerTETAndalucia202506_10];
lyr_Andaluciabackground_0.set('fieldAliases', {'fid': 'fid', 'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Terrenoforestal400msimplified_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_18': 'CODE_18', 'AREA_HA': 'AREA_HA', });
lyr_Terrenoforestalsimplified_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_18': 'CODE_18', 'AREA_HA': 'AREA_HA', });
lyr_Agua_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Ciudades_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Villages_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'Population', 'name': 'Name', });
lyr_Towns_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'Population', 'name': 'Name', });
lyr_Cities_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'Population', 'name': 'Name', });
lyr_Carreterassimplified_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ID_BD': 'ID_BD', 'ID_CODIGO': 'ID_CODIGO', 'ID_MOD': 'ID_MOD', 'FECHA_ALTA': 'FECHA_ALTA', 'TIPO_0605': 'TIPO_0605', 'ESTAD_0605': 'ESTAD_0605', 'ACCES_0605': 'ACCES_0605', 'SITUACION': 'SITUACION', 'CALZ_0605': 'CALZ_0605', 'SENTI_0605': 'SENTI_0605', 'FIRME_0605': 'FIRME_0605', 'ID_VIAL': 'ID_VIAL', 'ITIN_EUR': 'ITIN_EUR', 'TEN_T': 'TEN_T', 'ETIQUETA': 'ETIQUETA', 'layer': 'layer', 'path': 'path', });
lyr_TETAndalucia202506_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_IllegalinSummerTETAndalucia202506_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'fid_2': 'fid_2', 'ID': 'ID', 'CODE_18': 'CODE_18', 'AREA_HA': 'AREA_HA', });
lyr_Andaluciabackground_0.set('fieldImages', {'fid': 'TextEdit', 'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Terrenoforestal400msimplified_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CODE_18': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Terrenoforestalsimplified_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CODE_18': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Agua_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Ciudades_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Villages_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_Towns_6.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_Cities_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', });
lyr_Carreterassimplified_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ID_BD': 'TextEdit', 'ID_CODIGO': 'TextEdit', 'ID_MOD': 'TextEdit', 'FECHA_ALTA': 'DateTime', 'TIPO_0605': 'TextEdit', 'ESTAD_0605': 'TextEdit', 'ACCES_0605': 'TextEdit', 'SITUACION': 'TextEdit', 'CALZ_0605': 'TextEdit', 'SENTI_0605': 'TextEdit', 'FIRME_0605': 'TextEdit', 'ID_VIAL': 'TextEdit', 'ITIN_EUR': 'TextEdit', 'TEN_T': 'TextEdit', 'ETIQUETA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TETAndalucia202506_9.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', });
lyr_IllegalinSummerTETAndalucia202506_10.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'fid_2': 'TextEdit', 'ID': 'TextEdit', 'CODE_18': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Andaluciabackground_0.set('fieldLabels', {'fid': 'no label', 'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Terrenoforestal400msimplified_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CODE_18': 'no label', 'AREA_HA': 'no label', });
lyr_Terrenoforestalsimplified_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CODE_18': 'no label', 'AREA_HA': 'no label', });
lyr_Agua_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Ciudades_4.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', });
lyr_Villages_5.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'population': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Towns_6.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'population': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Cities_7.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'population': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Carreterassimplified_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ID_BD': 'no label', 'ID_CODIGO': 'no label', 'ID_MOD': 'no label', 'FECHA_ALTA': 'no label', 'TIPO_0605': 'no label', 'ESTAD_0605': 'no label', 'ACCES_0605': 'no label', 'SITUACION': 'no label', 'CALZ_0605': 'no label', 'SENTI_0605': 'no label', 'FIRME_0605': 'no label', 'ID_VIAL': 'no label', 'ITIN_EUR': 'no label', 'TEN_T': 'no label', 'ETIQUETA': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TETAndalucia202506_9.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_IllegalinSummerTETAndalucia202506_10.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'fid_2': 'no label', 'ID': 'no label', 'CODE_18': 'no label', 'AREA_HA': 'no label', });
lyr_IllegalinSummerTETAndalucia202506_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});