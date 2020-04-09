# `cheminfo/dereplication`:  Bad similarity results

[dereplication main doc](./dereplication.md) | [Other tests to optimize matchIndex](./dereplicationStats.md)

## General

After the `findBestMatches()` function was written, we started testing it on 10 experiments and the complete predicted data. To evaluate if the similarity is good or not, we want to optimize the `matchIndex`: the index of the exact match (the predicted spectrum that actually corresponds to the experiment) in an array of all predictions sorted by similarity with the experiment. 

Ideally, `matchIndex`should be 1, which would mean that the best similarity is between the experiment and the correct predicted spectrum.

## Changing `mergeSpan` and `alignDelta` values (2020.04.08)

**NB:** According to the specification of `align()`, `mergeSpan` must be bigger or equal to `alignDelta`!

The first tests we made, however, were fairly bad. Here is what we obtained for the first 10 experiments with all default options (mergeSpan = 1, alignDelta = 1, algorithm = cosine):

```bash
experiment   common     matchIndex
1            32         4260
2            31         71345
3            30         40876
4            18         98723
5            11         55451
6            15         11970
7            14         48598
8            21         7381
9            36         39856
10           38         17944
```

To enhance this, we thought about setting the `mergeSpan` of `loadData()` to 0.005, but it did not help.

```bash
experiment   common     matchIndex
1            45         4879
2            32         65890
3            31         41169
4            27         137461
5            33         108171
6            19         24138
7            22         30797
8            32         7090
9            43         17822
10           44         16573
```

Then, we tried changing the `alignDelta` option of `similarity()` to 0.005.

Changing both: `mergeSpan` = 0.005, `alignDelta` = 0.005

```bash
experiment   common     matchIndex
1            45         4879
2            32         65890
3            31         41169
4            27         137461
5            33         108171
6            19         24138
7            22         30797
8            32         7090
9            43         17822
10           44         16573
```

**WARNING:** From here on, if the similarity between an experiment and its true match is zero, the `matchIndex` is set to `predictions.length`.

## Changing similarity algorithm  (2020.04.09)

Median of matchIndex for the first 200 experiments.

```txt
Algorithm   norm in loadData     norm in similarity
cosine                  15'908                15908
intersection               337                2'510
```

## Norm in `loadData` or in `similarity`  (2020.04.09)

We tried to change where the spectra are normed. We either normed in `loadData` (so before even merging) or in `similarity`, before the `align()`function.

Observations:
- Norm in `loadData` gives better results when `algorithm = intersection`
- Where the data is normed has no influence on the median when `algorithm = cosine`

## Varying Y values weight  (2020.04.09)

We thought about weighting the Y values of the spectra by the X values to enhance the data. This means that we give more importance to bigger fragments, which have a bigger mass. This is done in the `similarity()` method, just before the similarity algorithm is applied.

Parameters:
- number of experiments: 200
- algorithm: `intersection`
- normalizing in loadData
- `matchIndex` set to `predictions.length` if similarity is zero

```bash
Weight   Median
x           239
x^2         206
x^3         168
x^4         154
x^10        128
log(x)      297
2^x         205
10^x        119
```

Based on these results, we decided to use a weight of x^3 from here on.