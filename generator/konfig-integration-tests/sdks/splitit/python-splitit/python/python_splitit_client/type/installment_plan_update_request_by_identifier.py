# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_splitit_client.type.identifier_contract import IdentifierContract
from python_splitit_client.type.installment_plan_update_request import InstallmentPlanUpdateRequest

InstallmentPlanUpdateRequestByIdentifier = typing.Union[InstallmentPlanUpdateRequest,typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]
