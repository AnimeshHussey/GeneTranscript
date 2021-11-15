import { HttpNodeService } from "../service/HttpService";

export async function getTranscriptdata(data) {
  try {
    const endpoint = `/lookup/symbol/homsap/${data}.json?;expand=1`;
    return await HttpNodeService.get(endpoint, data).then(function (res) {
      return res.data;
    });
  } catch (error) {
    return {};
  }
}

export async function getSequence(data) {
  try {
    const endpoint = `sequence/id/${data}.json`;
    return await HttpNodeService.get(endpoint).then(function (res) {
      return res.data;
    });
  } catch (error) {
    return {};
  }
}
