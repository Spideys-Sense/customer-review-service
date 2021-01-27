# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

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

1. '/api/:id/reviews'

Query Parameters:
sortBy - String (defines sort metric)
rating - String (defines star rating to filter by)

Returns:
Array of objects consisting of all reviews that match sort/filter metrics

2. '/api/:id/reviewAverages'

Returns:
Array consisting of average ratings and % distribution of star ratings ([averageRating, % of 1 star, % of 2 star...])

3. '/api/:id/photoReviews'

Returns:
Array consisting of all reviews with photos

4. '/api/:id/:review'

Query Parameters:
:review - Number (id of the review)

Returns:
An object; the review with the matching id