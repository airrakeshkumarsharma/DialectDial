### Release procedure

#### DialectDial Release procedure
1. test must pass
2. update `package.json` and `package-lock.json` version
3. Update CHANGELOG.md. Add #<TICKET_NUMBER> as well as a link to the github user who fixed it if applicable
4. git commit -a -m 'release x.x.x'.
5. git tag x.x.x
6. Announce in different channel with community and team.
