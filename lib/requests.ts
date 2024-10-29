import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

function getOffsetAndLimitFromReq(req: NextApiRequest, maxLimit, maxOffset) {
  const queryLimit = parseInt(req.query.limit as string);
  const queryOffset = parseInt(req.query.offset as string);

  const limit = queryLimit <= maxLimit ? queryLimit : maxLimit;
  const offset = queryOffset <= maxOffset ? queryOffset : maxOffset;

  return { limit, offset };
}

export { getOffsetAndLimitFromReq };
