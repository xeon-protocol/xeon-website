# Xeon Protocol website

[![license](https://img.shields.io/badge/license-BSD_3-darkgreen)](LICENSE.md)

[![xeon token](https://img.shields.io/badge/$XEON-0x8d65a2eaBDE4B31cbD7E43F27E47559d1CCec86c-8429c6.svg?logo=ethereum)](https://app.uniswap.org/explore/tokens/ethereum/0x8d65a2eabde4b31cbd7e43f27e47559d1ccec86c?chain=mainnet)

![Xeon Protocol](https://aquamarine-evil-bedbug-307.mypinata.cloud/ipfs/QmdcJqYcLE3Cp8tcygNjsb1Bp7ya8ApsjxivhBkgM8UJFk)

This repository contains the Xeon Protocol website.

Version Reviews and Updates can be found in the [changelog](CHANGELOG.md) which is regularly updated using `auto-changelog`.

## Follow Us

[![warpcast](https://img.shields.io/badge/Follow_@xeonprotocol-FFFFFF.svg?logo=farcaster)](https://warpcast.com/xeonprotocol) ![twitter follow](https://img.shields.io/twitter/follow/xeonprotocol) [![telegram](https://img.shields.io/badge/join_telegram-FFFFFF.svg?logo=telegram)](https://t.me/XeonProtocolPortal)

## Directory Structure

- `assets` - contains website dynamic assets and the relevent code.
- `css` - contains app style rules
- `docs` - contains documentation such as the whitepaper, pitch deck, etc.
- `images` - contains static image assets
- `js` - contains the a minified version of the `app.js` file

## Set Up

Clone the repository:

```sh
git clone https://github.com/xeon-protocol/xeon-website.git
```

If already cloned locally, ensure you have the latest changes locally:

```sh
git pull origin main
```

Install all dependencies:

```sh
npm install
```

This repository uses a submodule for the dapp code. Run the following commands to initialize and update the submodule containing dapp code:

```bash
# initialize `xeon-dapp` repo
git submodule update --init --recursive

# to pull in updates from the `xeon-dapp` repo
git submodule update --remote
```

To update the changelog with recent changes or version updates:

```sh
auto-changelog -p && git add CHANGELOG.md
```

## License

The primary license for the Xeon Protocol Website is the BSD 3-Clause License, see [`LICENSE.md`](LICENSE.md) for details.
