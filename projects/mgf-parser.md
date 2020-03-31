# `cheminfo/mgf-parser`

## Goal

Create a parser that inputs an `mgf` format database and converts it into a `JSON`.

## Context
We are in the scope of GCMS (gaz chromatography mass spectroscopy) data analysis. Some researchers at UNIGE, specialized in natural products, want to identify what molecules they have inside of a very large mix. Doing so, they can determine which molecules are already known and therefore not interesting to study (by study, we mean for example test for anti-bacterial properties). To quickly identify known molecules, they have created a database which contains predicted mass spectra for known pure products (like caffeine). The prediction is useful because you can not be possessing some of the product in a lab, and you can therefore not make a mass spectrum.

Since you have the predicted mass spectra for a lot of molecules, you can then quickly compare experimental mass spectra to them and determine wether the product is known or not.

The database we have been provided is in the MGF format. We want to parse it to then be able to write a comparison script.

**N.B.:** "Natural products are chemical compounds found in nature originating in plants, animals, and microbial and marine sources. Such products are important in the cosmetics, food, and nutrition industries because of their many beneficial properties and positive commercial image. Many active pharmaceutical compounds are natural products or derivatives of natural compounds, and it is estimated that some 40% of the drugs marketed today are derived from chemical structures found in nature. (https://www.molport.com/shop/natural-compound-database)"

**Client:** UNIGE