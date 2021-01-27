import logging

import azure.functions as func

import requests
import json
from datetime import datetime, timedelta

def main(req: func.HttpRequest) -> func.HttpResponse:
  logging.info('Python HTTP trigger function processed a request.')
  countryName = req.params.get('country')
  if countryName:
    url = f"https://api.covid19api.com/live/country/{countryName}/status/confirmed/date/{(datetime.now().date() - timedelta(days=2)).isoformat()}"
    response = requests.request("GET", url)
    rJSON = json.loads(response.content)
    if isinstance(rJSON, list) and len(rJSON) > 0:
      confirmed = deaths = recovered = active = 0
      for el in rJSON:
        confirmed += el['Confirmed']
        deaths += el['Deaths']
        recovered += el['Recovered']
        active += el['Active']
      summary = {
        "Country": rJSON[0]['Country'],
        "Confirmed": confirmed,
        "Deaths": deaths,
        "Recovered": recovered,
        "Active": active,
      }
      return func.HttpResponse(json.dumps(summary))
    else:
      return func.HttpResponse(
      "No data",
      status_code=400
    )
  else:
    return func.HttpResponse(
      "No country name",
      status_code=400
    )
