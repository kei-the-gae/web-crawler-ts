function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log("no website provided");
    process.exit(1);
  }
  if (args.length > 1) {
    console.log("too many arguments provided");
    process.exit(1);
  }
  const baseURL = args[0];

  console.log(`starting crawl of: ${baseURL}...`);

  process.exit(0);
}

main();
