# Project Name

> Bitey is a fun chewy.com clone made by Spidey's Sense

## Related Projects

  - https://github.com/Spideys-Sense/product-display-service
  - https://github.com/Spideys-Sense/item-description-service
  - https://github.com/Spideys-Sense/proxy-server-eusanio

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Endpoints

### '/api/:id/reviews'

Query Parameters:
:id - Number (item id)
sortBy - String (defines sort metric)
rating - String (defines star rating to filter by)

Returns:
Array of objects consisting of all reviews that match sort/filter metrics

### '/api/:id/reviewAverages'

Query Parameters:
:id - Number (item id)

Returns:
Array consisting of average ratings and % distribution of star ratings ([averageRating, % of 1 star, % of 2 star...])

### '/api/:id/photoReviews'

Query Parameters:
:id - Number (item id)

Returns:
Array consisting of all reviews with photos

### '/api/:id/:review'

Query Parameters:
:id - Number (item id)
:review - Number (id of the review)

Returns:
An object; the review with the matching id