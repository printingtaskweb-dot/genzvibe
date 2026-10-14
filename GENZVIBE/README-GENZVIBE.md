# GENZVIBE website source

Complete source snapshot of the GENZVIBE website.

## Main files
- components/Site.tsx: pages, navigation, forms and content studio
- app/globals.css: design system and responsive styles
- components/content.json: initial services, solutions and empty company profiles
- components/validation.ts: request validation
- app/api/content/route.ts: persistent content API
- app/api/enquiries/route.ts: enquiry API
- db/schema.ts and drizzle/: database schema and migration

## Local development
Requires Node.js 22.13 or later and pnpm.

    pnpm install --frozen-lockfile
    pnpm dev

For production build:

    pnpm build

See README.md for the framework, local D1 database setup and authentication integration. The website uses Vinext, React, TypeScript, Cloudflare Workers and D1. It is not a static HTML-only website; contact submissions and content management require the database and authentication integration.

## Hosting and administrator access
The current deployment is owner-private on ChatGPT Sites. The content studio relies on that access boundary and platform-authenticated identity. Before deploying publicly or to another host, configure explicit administrator authorization and compatible authentication. Do not trust identity headers from untrusted clients on another host.

## Content
15 services and 11 solutions are included. Portfolio examples are illustrative concepts. Actual contact information, team biographies and client projects should be supplied by the business.

## Package contents
Source, dependency lockfile, build configuration and schema migration are included. Dependencies, build caches, repository history, runtime database records and credentials are excluded. Reinstall dependencies after extraction. This archive does not modify the deployed website.
