# stathis-site

### My personal site

This is a site built with svelte, tailwindecss and compiled with vite, that talks abit about my skills, projects, and future ambitions. It's also a fun project for me to play around with svelte.

**This is the dev build**
The "production" build is at
[My Site](https://stathis-kapnidis.cf) or if that is down, you can check it out at [Vercel](https://stathis-site.vercel.app)

Site is hosted on an old laptop running proxomox, on an LXC container.


### Build
```sh
docker buildx build --platform linux/amd64 -t stathiskap/stathis-site:1.0 . --push
kubectl rollout restart deployment stathis-site -n stathis-site
```
