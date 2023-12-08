# ESLINT VISUALIZATION
A project to visualize ESLint static analysis data in any repo that uses ESLint

## Available Scripts
In the project directory, you can run:

### `node script.js <repository>`
Provide repository with the path of your working directory
It will process the eslint data and automatically open a local browser to display the data

## ESLint visualization UI
There are 2 tabs: statistic and detailed

### STATISTIC
Display general summary of the analysis result
<img width="1875" alt="image" src="https://github.com/CMPUT416-Triet-Nicholas/eslint_visualization/assets/90472166/44c778a7-dcd3-43d5-9843-2c66d2dab72c">

### DETAILED
Display detailed analysis for each file
<img width="1867" alt="image" src="https://github.com/CMPUT416-Triet-Nicholas/eslint_visualization/assets/90472166/d7f4ee4c-4bc8-410d-8497-9f9334d7804f">
<img width="1795" alt="image" src="https://github.com/CMPUT416-Triet-Nicholas/eslint_visualization/assets/90472166/af49cf2e-8808-4237-93a8-e08db4e52d09">

## RESULT

| Repo                        | Lines of Code   | Execution Time |
|-----------------------------|-----------------|----------------|
| DevHub                      | 27,000 LOCs     | 15 seconds     |
| Kutt                        | 10,000 LOCs     | 5 seconds      |
| HackerNews-React-GraphQL    | 7,000 LOCs      | 5 seconds      |
| Spectrum                    | 115,000 LOCs    | 7 seconds      |
| Sentry                      | 2 million LOCs  | 55 seconds     |

## RESULT REPLICATION
Here is the list of tested repositories:
+ [DevHub](https://github.com/devhubapp/devhub)
+ [Kutt](https://github.com/thedevs-network/kutt)
+ [HackerNews React GraphQL](https://github.com/clintonwoo/hackernews-react-graphql)
+ [Spectrum](https://github.com/withspectrum/spectrum)
+ [Sentry](https://github.com/getsentry/sentry)

For each repository, clone it down and install all of its packages by running one of these 2 commands
```
cd <repo-name>
yarn
```
```
cd <repo-name>
npm install
```

Then, clone this repo down, and run this command
```
cd eslint_visualization
yarn
node script.js <repo-absolute-path>
```

For e.g:
```
cd eslint_visualization
yarn
node script.js /Users/littlepanda312/dev/sentry
```
