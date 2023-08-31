let keys;

if (process.env.NODE_ENV === "production") {
    let env = await import ('./prod.js');
    keys = env.default;
} else {
    let env =  await import ('./dev.js')
    keys = env.default;
}

export default keys;