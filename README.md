# @grace-studio/json-merge

[![npm version](https://badge.fury.io/js/@grace-studio%2Fjson-merge.svg)](https://www.npmjs.com/package/@grace-studio/json-merge)

## Installation

```bash
npm i -g @grace-studio/json-merge

# or

yarn global add @grace-studio/json-merge
```

## Usage

**Merge multiple JSON files:**

```bash
json-merge \
--files <input-json-files...> \
--out <output-json-file>
```

**Example:**

```bash
json-merge \
-f ./testfiles/test.json ./testfiles/test2.json \
-o ./testfiles/out.json
```
