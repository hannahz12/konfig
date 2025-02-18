/*
 * SnapTrade
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.konfigthis.client.model.OptionStrategy;
import com.konfigthis.client.model.OrderType;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.openapitools.jackson.nullable.JsonNullable;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.konfigthis.client.JSON;

/**
 * Strategy order record
 */
@ApiModel(description = "Strategy order record")@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class StrategyOrderRecord {
  public static final String SERIALIZED_NAME_STRATEGY = "strategy";
  @SerializedName(SERIALIZED_NAME_STRATEGY)
  private OptionStrategy strategy;

  /**
   * Gets or Sets status
   */
  @JsonAdapter(StatusEnum.Adapter.class)
 public enum StatusEnum {
    PENDING("PENDING"),
    
    ACCEPTED("ACCEPTED"),
    
    FAILED("FAILED"),
    
    REJECTED("REJECTED"),
    
    CANCELED("CANCELED"),
    
    PARTIAL_CANCELED("PARTIAL_CANCELED"),
    
    CANCEL_PENDING("CANCEL_PENDING"),
    
    EXECUTED("EXECUTED"),
    
    PARTIAL("PARTIAL"),
    
    REPLACE_PENDING("REPLACE_PENDING"),
    
    REPLACED("REPLACED"),
    
    STOPPED("STOPPED"),
    
    SUSPENDED("SUSPENDED"),
    
    EXPIRED("EXPIRED"),
    
    QUEUED("QUEUED"),
    
    TRIGGERED("TRIGGERED"),
    
    ACTIVATED("ACTIVATED"),
    
    PENDING_RISK_REVIEW("PENDING_RISK_REVIEW"),
    
    CONTINGENT_ORDER("CONTINGENT_ORDER");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StatusEnum fromValue(String value) {
      for (StatusEnum b : StatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<StatusEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StatusEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StatusEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return StatusEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private StatusEnum status;

  public static final String SERIALIZED_NAME_FILLED_QUANTITY = "filled_quantity";
  @SerializedName(SERIALIZED_NAME_FILLED_QUANTITY)
  private Double filledQuantity;

  public static final String SERIALIZED_NAME_OPEN_QUANTITY = "open_quantity";
  @SerializedName(SERIALIZED_NAME_OPEN_QUANTITY)
  private Double openQuantity;

  public static final String SERIALIZED_NAME_CLOSED_QUANTITY = "closed_quantity";
  @SerializedName(SERIALIZED_NAME_CLOSED_QUANTITY)
  private Double closedQuantity;

  public static final String SERIALIZED_NAME_ORDER_TYPE = "order_type";
  @SerializedName(SERIALIZED_NAME_ORDER_TYPE)
  private OrderType orderType;

  public static final String SERIALIZED_NAME_TIME_IN_FORCE = "time_in_force";
  @SerializedName(SERIALIZED_NAME_TIME_IN_FORCE)
  private String timeInForce;

  public static final String SERIALIZED_NAME_LIMIT_PRICE = "limit_price";
  @SerializedName(SERIALIZED_NAME_LIMIT_PRICE)
  private Double limitPrice;

  public static final String SERIALIZED_NAME_EXECUTION_PRICE = "execution_price";
  @SerializedName(SERIALIZED_NAME_EXECUTION_PRICE)
  private Double executionPrice;

  public static final String SERIALIZED_NAME_TIME_PLACED = "time_placed";
  @SerializedName(SERIALIZED_NAME_TIME_PLACED)
  private String timePlaced;

  public static final String SERIALIZED_NAME_TIME_UPDATED = "time_updated";
  @SerializedName(SERIALIZED_NAME_TIME_UPDATED)
  private String timeUpdated;

  public StrategyOrderRecord() {
  }

  public StrategyOrderRecord strategy(OptionStrategy strategy) {
    
    
    
    
    this.strategy = strategy;
    return this;
  }

   /**
   * Get strategy
   * @return strategy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OptionStrategy getStrategy() {
    return strategy;
  }


  public void setStrategy(OptionStrategy strategy) {
    
    
    
    this.strategy = strategy;
  }


  public StrategyOrderRecord status(StatusEnum status) {
    
    
    
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public StatusEnum getStatus() {
    return status;
  }


  public void setStatus(StatusEnum status) {
    
    
    
    this.status = status;
  }


  public StrategyOrderRecord filledQuantity(Double filledQuantity) {
    
    
    
    
    this.filledQuantity = filledQuantity;
    return this;
  }

  public StrategyOrderRecord filledQuantity(Integer filledQuantity) {
    
    
    
    
    this.filledQuantity = filledQuantity.doubleValue();
    return this;
  }

   /**
   * Get filledQuantity
   * @return filledQuantity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "10", value = "")

  public Double getFilledQuantity() {
    return filledQuantity;
  }


  public void setFilledQuantity(Double filledQuantity) {
    
    
    
    this.filledQuantity = filledQuantity;
  }


  public StrategyOrderRecord openQuantity(Double openQuantity) {
    
    
    
    
    this.openQuantity = openQuantity;
    return this;
  }

  public StrategyOrderRecord openQuantity(Integer openQuantity) {
    
    
    
    
    this.openQuantity = openQuantity.doubleValue();
    return this;
  }

   /**
   * Get openQuantity
   * @return openQuantity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "10", value = "")

  public Double getOpenQuantity() {
    return openQuantity;
  }


  public void setOpenQuantity(Double openQuantity) {
    
    
    
    this.openQuantity = openQuantity;
  }


  public StrategyOrderRecord closedQuantity(Double closedQuantity) {
    
    
    
    
    this.closedQuantity = closedQuantity;
    return this;
  }

  public StrategyOrderRecord closedQuantity(Integer closedQuantity) {
    
    
    
    
    this.closedQuantity = closedQuantity.doubleValue();
    return this;
  }

   /**
   * Get closedQuantity
   * @return closedQuantity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "10", value = "")

  public Double getClosedQuantity() {
    return closedQuantity;
  }


  public void setClosedQuantity(Double closedQuantity) {
    
    
    
    this.closedQuantity = closedQuantity;
  }


  public StrategyOrderRecord orderType(OrderType orderType) {
    
    
    
    
    this.orderType = orderType;
    return this;
  }

   /**
   * Get orderType
   * @return orderType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public OrderType getOrderType() {
    return orderType;
  }


  public void setOrderType(OrderType orderType) {
    
    
    
    this.orderType = orderType;
  }


  public StrategyOrderRecord timeInForce(String timeInForce) {
    
    
    
    
    this.timeInForce = timeInForce;
    return this;
  }

   /**
   * Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date 
   * @return timeInForce
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date ")

  public String getTimeInForce() {
    return timeInForce;
  }


  public void setTimeInForce(String timeInForce) {
    
    
    
    this.timeInForce = timeInForce;
  }


  public StrategyOrderRecord limitPrice(Double limitPrice) {
    
    
    
    
    this.limitPrice = limitPrice;
    return this;
  }

  public StrategyOrderRecord limitPrice(Integer limitPrice) {
    
    
    
    
    this.limitPrice = limitPrice.doubleValue();
    return this;
  }

   /**
   * Trade Price if limit or stop limit order
   * @return limitPrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "31.33", value = "Trade Price if limit or stop limit order")

  public Double getLimitPrice() {
    return limitPrice;
  }


  public void setLimitPrice(Double limitPrice) {
    
    
    
    this.limitPrice = limitPrice;
  }


  public StrategyOrderRecord executionPrice(Double executionPrice) {
    
    
    
    
    this.executionPrice = executionPrice;
    return this;
  }

  public StrategyOrderRecord executionPrice(Integer executionPrice) {
    
    
    
    
    this.executionPrice = executionPrice.doubleValue();
    return this;
  }

   /**
   * Trade Price if limit or stop limit order
   * @return executionPrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "31.33", value = "Trade Price if limit or stop limit order")

  public Double getExecutionPrice() {
    return executionPrice;
  }


  public void setExecutionPrice(Double executionPrice) {
    
    
    
    this.executionPrice = executionPrice;
  }


  public StrategyOrderRecord timePlaced(String timePlaced) {
    
    
    
    
    this.timePlaced = timePlaced;
    return this;
  }

   /**
   * Time
   * @return timePlaced
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2022-01-21T20:11:19.217Z", value = "Time")

  public String getTimePlaced() {
    return timePlaced;
  }


  public void setTimePlaced(String timePlaced) {
    
    
    
    this.timePlaced = timePlaced;
  }


  public StrategyOrderRecord timeUpdated(String timeUpdated) {
    
    
    
    
    this.timeUpdated = timeUpdated;
    return this;
  }

   /**
   * Time
   * @return timeUpdated
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2022-01-21T20:11:19.217Z", value = "Time")

  public String getTimeUpdated() {
    return timeUpdated;
  }


  public void setTimeUpdated(String timeUpdated) {
    
    
    
    this.timeUpdated = timeUpdated;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, Object> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   *
   * @param key name of the property
   * @param value value of the property
   * @return the StrategyOrderRecord instance itself
   */
  public StrategyOrderRecord putAdditionalProperty(String key, Object value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, Object>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   *
   * @return a map of objects
   */
  public Map<String, Object> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   *
   * @param key name of the property
   * @return an object
   */
  public Object getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StrategyOrderRecord strategyOrderRecord = (StrategyOrderRecord) o;
    return Objects.equals(this.strategy, strategyOrderRecord.strategy) &&
        Objects.equals(this.status, strategyOrderRecord.status) &&
        Objects.equals(this.filledQuantity, strategyOrderRecord.filledQuantity) &&
        Objects.equals(this.openQuantity, strategyOrderRecord.openQuantity) &&
        Objects.equals(this.closedQuantity, strategyOrderRecord.closedQuantity) &&
        Objects.equals(this.orderType, strategyOrderRecord.orderType) &&
        Objects.equals(this.timeInForce, strategyOrderRecord.timeInForce) &&
        Objects.equals(this.limitPrice, strategyOrderRecord.limitPrice) &&
        Objects.equals(this.executionPrice, strategyOrderRecord.executionPrice) &&
        Objects.equals(this.timePlaced, strategyOrderRecord.timePlaced) &&
        Objects.equals(this.timeUpdated, strategyOrderRecord.timeUpdated)&&
        Objects.equals(this.additionalProperties, strategyOrderRecord.additionalProperties);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(strategy, status, filledQuantity, openQuantity, closedQuantity, orderType, timeInForce, limitPrice, executionPrice, timePlaced, timeUpdated, additionalProperties);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StrategyOrderRecord {\n");
    sb.append("    strategy: ").append(toIndentedString(strategy)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    filledQuantity: ").append(toIndentedString(filledQuantity)).append("\n");
    sb.append("    openQuantity: ").append(toIndentedString(openQuantity)).append("\n");
    sb.append("    closedQuantity: ").append(toIndentedString(closedQuantity)).append("\n");
    sb.append("    orderType: ").append(toIndentedString(orderType)).append("\n");
    sb.append("    timeInForce: ").append(toIndentedString(timeInForce)).append("\n");
    sb.append("    limitPrice: ").append(toIndentedString(limitPrice)).append("\n");
    sb.append("    executionPrice: ").append(toIndentedString(executionPrice)).append("\n");
    sb.append("    timePlaced: ").append(toIndentedString(timePlaced)).append("\n");
    sb.append("    timeUpdated: ").append(toIndentedString(timeUpdated)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("strategy");
    openapiFields.add("status");
    openapiFields.add("filled_quantity");
    openapiFields.add("open_quantity");
    openapiFields.add("closed_quantity");
    openapiFields.add("order_type");
    openapiFields.add("time_in_force");
    openapiFields.add("limit_price");
    openapiFields.add("execution_price");
    openapiFields.add("time_placed");
    openapiFields.add("time_updated");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to StrategyOrderRecord
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!StrategyOrderRecord.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in StrategyOrderRecord is not found in the empty JSON string", StrategyOrderRecord.openapiRequiredFields.toString()));
        }
      }
      // validate the optional field `strategy`
      if (jsonObj.get("strategy") != null && !jsonObj.get("strategy").isJsonNull()) {
        OptionStrategy.validateJsonObject(jsonObj.getAsJsonObject("strategy"));
      }
      if ((jsonObj.get("status") != null && !jsonObj.get("status").isJsonNull()) && !jsonObj.get("status").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `status` to be a primitive type in the JSON string but got `%s`", jsonObj.get("status").toString()));
      }
      if ((jsonObj.get("time_in_force") != null && !jsonObj.get("time_in_force").isJsonNull()) && !jsonObj.get("time_in_force").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `time_in_force` to be a primitive type in the JSON string but got `%s`", jsonObj.get("time_in_force").toString()));
      }
      if ((jsonObj.get("time_placed") != null && !jsonObj.get("time_placed").isJsonNull()) && !jsonObj.get("time_placed").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `time_placed` to be a primitive type in the JSON string but got `%s`", jsonObj.get("time_placed").toString()));
      }
      if ((jsonObj.get("time_updated") != null && !jsonObj.get("time_updated").isJsonNull()) && !jsonObj.get("time_updated").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `time_updated` to be a primitive type in the JSON string but got `%s`", jsonObj.get("time_updated").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!StrategyOrderRecord.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'StrategyOrderRecord' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<StrategyOrderRecord> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(StrategyOrderRecord.class));

       return (TypeAdapter<T>) new TypeAdapter<StrategyOrderRecord>() {
           @Override
           public void write(JsonWriter out, StrategyOrderRecord value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             obj.remove("additionalProperties");
             // serialize additonal properties
             if (value.getAdditionalProperties() != null) {
               for (Map.Entry<String, Object> entry : value.getAdditionalProperties().entrySet()) {
                 if (entry.getValue() instanceof String)
                   obj.addProperty(entry.getKey(), (String) entry.getValue());
                 else if (entry.getValue() instanceof Number)
                   obj.addProperty(entry.getKey(), (Number) entry.getValue());
                 else if (entry.getValue() instanceof Boolean)
                   obj.addProperty(entry.getKey(), (Boolean) entry.getValue());
                 else if (entry.getValue() instanceof Character)
                   obj.addProperty(entry.getKey(), (Character) entry.getValue());
                 else if (entry.getValue() == null) {
                   obj.addProperty(entry.getKey(), (String) null);
                 } else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public StrategyOrderRecord read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             StrategyOrderRecord instance = thisAdapter.fromJsonTree(jsonObj);
             for (Map.Entry<String, JsonElement> entry : jsonObj.entrySet()) {
               if (!openapiFields.contains(entry.getKey())) {
                 if (entry.getValue().isJsonPrimitive()) { // primitive type
                   if (entry.getValue().getAsJsonPrimitive().isString())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsString());
                   else if (entry.getValue().getAsJsonPrimitive().isNumber())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsNumber());
                   else if (entry.getValue().getAsJsonPrimitive().isBoolean())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsBoolean());
                   else
                     throw new IllegalArgumentException(String.format("The field `%s` has unknown primitive type. Value: %s", entry.getKey(), entry.getValue().toString()));
                 } else if (entry.getValue().isJsonArray()) {
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), List.class));
                 } else { // JSON object
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), HashMap.class));
                 }
               }
             }
             return instance;
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of StrategyOrderRecord given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of StrategyOrderRecord
  * @throws IOException if the JSON string is invalid with respect to StrategyOrderRecord
  */
  public static StrategyOrderRecord fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, StrategyOrderRecord.class);
  }

 /**
  * Convert an instance of StrategyOrderRecord to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

