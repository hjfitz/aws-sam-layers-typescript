# layer-local-poc

notes
- ignore all of the build tool config with sam - should use a gulpfile or similar. there are weird side effects going on
- for any lambda layers that use *code* within a lambda layer, ensure that `paths` are configured in `tsconfig.json`. **note: `baseUrl` should also be configured**.
- because code needs to be local (for sensical development) it may make sense to publish a package to ghpr, artifactory, etc.
