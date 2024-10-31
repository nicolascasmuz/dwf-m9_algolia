import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { productsIndex } from "lib/algolia";
import { getOffsetAndLimitFromReq } from "lib/requests";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { limit, offset } = getOffsetAndLimitFromReq(req, 30, 15);
    const { q } = req.query;
    const query = await productsIndex.search(q as string, {
      hitsPerPage: limit,
      offset,
      length: limit,
    });

    res.status(200).json({
      results: query.hits,
      pagination: { limit, offset, total: query.nbHits },
    });
  },
});
