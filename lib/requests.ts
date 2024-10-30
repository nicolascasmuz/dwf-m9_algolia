import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

function getOffsetAndLimitFromReq(req: NextApiRequest, maxLimit, maxOffset) {
  const queryLimit = parseInt((req.query.limit as string) || "0");
  const queryOffset = parseInt((req.query.offset as string) || "0");

  let limit;
  let offset;

  if (queryLimit > 0 && queryLimit <= maxLimit) {
    limit = queryLimit;
  } else {
    limit = maxLimit;
  }

  if (queryOffset > 0 && queryOffset <= maxOffset) {
    offset = queryOffset;
  } else {
    offset = maxOffset;
  }

  return { limit, offset };
}

export { getOffsetAndLimitFromReq };
