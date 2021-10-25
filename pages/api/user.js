import getServerSideUser from "api/helpers/getServerSideUser";

export default async function handler(req, res) {
  try {
    const user = await getServerSideUser(req, res);
    return res.status(200).json({ user });
  } catch (error) {
    if (res.statusCode === 200) res.status(500);
    return res.send(error.message);
  }
}
