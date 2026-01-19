# Contributing Guidelines 👨‍💻

- Don't commit and push to the `main` branch
- To start, always create new branch as `yourname/component_name`. For example, to create new branch for event_forms page,
```bash
git checkout -b abhi/event_forms
```
- While commiting and pushing the changes to your branch, use command,
```bash
git push origin abhi/event_forms
```
- To pull new changes made by someone on your branch, run command,
```bash
git pull origin abhi/event_forms
```

# Development
While developing respective components, always follow this guidelines,
- Never make changes into `App.js` file
- To see your code output on the website, go on to the specific route in which that component is supposed to be. For example, to see `schedule` component which will be on the homepage, you should go to the route as `localhost:5173/`. For `login-signup` component, you should go to the route `localhost:5173/auth`, so on.
