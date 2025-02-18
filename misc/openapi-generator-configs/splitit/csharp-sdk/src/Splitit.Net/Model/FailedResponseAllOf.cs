/*
 * splitit-web-api-v3
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Splitit.Net.Client.OpenAPIDateConverter;

namespace Splitit.Net.Model
{
    /// <summary>
    /// FailedResponseAllOf
    /// </summary>
    [DataContract]
    public partial class FailedResponseAllOf :  IEquatable<FailedResponseAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FailedResponseAllOf" /> class.
        /// </summary>
        /// <param name="traceId">traceId.</param>
        /// <param name="error">error.</param>
        public FailedResponseAllOf(string traceId = default(string), ErrorExtended error = default(ErrorExtended))
        {
            this.TraceId = traceId;
            this.Error = error;
        }

        /// <summary>
        /// Gets or Sets TraceId
        /// </summary>
        [DataMember(Name="TraceId", EmitDefaultValue=false)]
        public string TraceId { get; set; }

        /// <summary>
        /// Gets or Sets Error
        /// </summary>
        [DataMember(Name="Error", EmitDefaultValue=false)]
        public ErrorExtended Error { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class FailedResponseAllOf {\n");
            sb.Append("  TraceId: ").Append(TraceId).Append("\n");
            sb.Append("  Error: ").Append(Error).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as FailedResponseAllOf);
        }

        /// <summary>
        /// Returns true if FailedResponseAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of FailedResponseAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FailedResponseAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.TraceId == input.TraceId ||
                    (this.TraceId != null &&
                    this.TraceId.Equals(input.TraceId))
                ) && 
                (
                    this.Error == input.Error ||
                    (this.Error != null &&
                    this.Error.Equals(input.Error))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.TraceId != null)
                    hashCode = hashCode * 59 + this.TraceId.GetHashCode();
                if (this.Error != null)
                    hashCode = hashCode * 59 + this.Error.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
